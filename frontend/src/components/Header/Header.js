import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiUser, FiDatabase, FiHome, FiFileText, FiHeart, FiLogOut } from "react-icons/fi";
import Login from "../Login";
import {
  openLoginModal,
  closeLoginModal,
} from "../../features/uiSlice";
import { logout } from "../../features/authSlice";

const Header = ({ navLinks }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  const isAdmin = user?.roles?.some((r) => r.role === "Admin");
  const isOwner = user?.roles?.some((r) => r.role === "Owner");
  const isCustomer = user?.roles?.some((r) => r.role === "Customer");

  const { isLoginModalOpen } = useSelector((state) => state.ui);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <FiHome size={28} />
            <span>RentAPlace</span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center gap-3">
              {/* Post Property Button for Everyone (prompts login if not owner) */}
              <Link
                to={isOwner ? "/add-property" : "#"}
                onClick={() => !isOwner && !isAuthenticated && dispatch(openLoginModal())}
                className="btn btn-primary rounded-pill px-4"
              >
                Post Property <span className="badge bg-white text-primary ms-1">FREE</span>
              </Link>

              {isAuthenticated ? (
                <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic" className="d-flex align-items-center gap-2 border-0">
                    <div className="bg-light rounded-circle p-2 text-primary">
                      <FiUser size={20} />
                    </div>
                    <span className="fw-bold d-none d-md-block">{user?.name || user?.email?.split('@')[0]}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu align="end" className="shadow-lg border-0 mt-2">
                    <div className="px-3 py-2 border-bottom mb-2">
                      <p className="mb-0 fw-bold">{user?.email}</p>
                      <small className="text-muted">{user?.roles?.[0]?.role}</small>
                    </div>

                    {isAdmin && <Dropdown.Item href="/admin/dashboard"><FiDatabase className="me-2" /> Admin Dashboard</Dropdown.Item>}
                    <Dropdown.Item href="/profile"><FiUser className="me-2" /> Profile</Dropdown.Item>
                    {isOwner && <Dropdown.Item href="/my-properties"><FiHome className="me-2" /> My Properties</Dropdown.Item>}
                    {isCustomer && <Dropdown.Item href="/my-offer"><FiFileText className="me-2" /> My Offers</Dropdown.Item>}
                    <Dropdown.Item href="/favorite"><FiHeart className="me-2" /> Favorites</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => {
                      dispatch(logout());
                      localStorage.clear();
                      window.location.href = "/";
                    }} className="text-danger">
                      <FiLogOut className="me-2" /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <div className="d-flex gap-2">
                  <Button variant="outline-dark" className="rounded-pill px-4" onClick={() => dispatch(openLoginModal())}>
                    Login
                  </Button>
                  <Link to="/register/customer" className="btn btn-dark rounded-pill px-4">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer for fixed header */}
      <div style={{ height: '80px' }}></div>

      <Login show={isLoginModalOpen} handleClose={() => dispatch(closeLoginModal())} />
    </>
  );
};

export default Header;
