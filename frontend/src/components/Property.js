import React, { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../features/uiSlice";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { formatMoney } from "../utils/money";
import { api } from "../libs/api";
import { FiEdit2, FiEye } from "react-icons/fi";
import ConfirmationModal from "./ConfirmationModal";

const Property = ({
  price,
  numberOfRoom,
  type,
  location,
  pictures,
  id,
  offerStatus,
  favorite,
  refetch,
  viewOffer,
  updateProperty,
  unFav,
  facilities
}) => {
  const addFavorite = async (id) => {
    api.post(`favorites/${id}`).then((res) => {
      refetch();
      setIsFav(true);
    });
  };
  const removeFavorite = (id) => {
    api.delete(`favorites/${id}`).then((res) => {
      refetch();
      setIsFav(false);
    });
  };

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isFav, setIsFav] = useState(favorite || unFav);
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <div className="card border-0 shadow-sm h-100 position-relative overflow-hidden"
      style={{ borderRadius: '12px', transition: 'transform 0.2s' }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div className="position-relative">
        <Link to={`/property/${id}`}>
          <img
            src={pictures?.[0] || '/assets/images/default-property.png'}
            className="card-img-top"
            alt="Property"
            onError={(e) => { e.target.onerror = null; e.target.src = '/assets/images/default-property.png'; }}
            style={{ height: '220px', objectFit: 'cover' }}
          />
        </Link>
        <div className="position-absolute top-0 end-0 p-2">
          <button
            className={`btn btn-light rounded-circle shadow-sm border-0 d-flex align-items-center justify-content-center p-2 ${isFav ? 'text-danger' : 'text-muted'}`}
            style={{ width: '40px', height: '40px' }}
            onClick={(e) => {
              e.preventDefault();
              if (!isAuthenticated) {
                dispatch(openLoginModal());
                return;
              }
              isFav ? removeFavorite(id) : addFavorite(id);
              refetch?.();
            }}
          >
            {isFav ? <MdOutlineFavorite size={20} /> : <MdFavoriteBorder size={20} />}
          </button>
        </div>
        <div className="position-absolute bottom-0 start-0 p-2 w-100 bg-gradient-to-t" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
          <span className="badge bg-primary px-3 py-2 rounded-pill fw-normal">
            {type}
          </span>
        </div>
      </div>

      <div className="card-body p-3">
        <Link to={`/property/${id}`} className="text-decoration-none text-dark">
          <h5 className="card-title fw-bold mb-1">{formatMoney(price)}</h5>
          <p className="card-text text-muted mb-2 small text-truncate">
            <i className="bi bi-geo-alt-fill me-1"></i> {location}
          </p>
          <div className="d-flex flex-wrap gap-1 mb-2">
            {facilities?.slice(0, 3).map((fac, i) => (
              <span key={i} className="badge bg-light text-dark border fw-normal" style={{ fontSize: '0.7rem' }}>{fac}</span>
            ))}
            {facilities?.length > 3 && <span className="badge bg-light text-muted border fw-normal" style={{ fontSize: '0.7rem' }}>+{facilities.length - 3}</span>}
          </div>
        </Link>

        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
          <div className="d-flex align-items-center text-muted small">
            <span className="fw-bold text-dark me-1">{numberOfRoom}</span> Beds
          </div>

          <div className="d-flex gap-2">
            {updateProperty && (
              <Link to={`/update-property/${id}`} className="btn btn-sm btn-outline-secondary rounded-circle p-2" title="Edit">
                <FiEdit2 />
              </Link>
            )}

            {offerStatus === 'AVAILABLE' && !updateProperty && !viewOffer && (
              <Button
                variant="primary"
                size="sm"
                className="px-3 rounded-pill fw-bold"
                onClick={(e) => {
                  e.preventDefault();
                  if (!isAuthenticated) {
                    dispatch(openLoginModal());
                    return;
                  }
                  setShowBookingModal(true);
                }}
              >
                Book Now
              </Button>
            )}

            {viewOffer ? (
              <Button variant="outline-primary" size="sm" onClick={() => viewOffer(id)}>
                Review Offers
              </Button>
            ) : (
              <Link to={`/property/${id}`} className="btn btn-sm btn-outline-primary px-3 rounded-pill fw-bold">
                View Details
              </Link>
            )}
          </div>
        </div>
      </div>

      <ConfirmationModal
        show={showBookingModal}
        onHide={() => setShowBookingModal(false)}
        propertyId={id}
        price={price}
        onSuccess={() => {
          // Optionally refetch or show success toast
          if (refetch) refetch();
        }}
      />
    </div >
  );
};

export default Property;
