import "../styles/stars.css";

export default function StarRating({ value }) {
    const rating = Number(value) || 0;

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1: 0);

    return (
        <div className="stars" aria-label={`Note: ${value} sur 5`}>
            {Array.from({ length: fullStars }).map((_, i) => (
                <span key={`full-${i}`} className="star star--full" aria-hidden="true">★</span>
            ))}

            {hasHalfStar && (
                <span className="star star--half" aria-hidden="true">★</span>
            )}

            {Array.from({ length: emptyStars }).map((_, i) => (
                <span key={`empty-${i}`} className="star star--empty" aria-hidden="true">☆</span>
            ))}

            <span className="stars_value">{rating.toFixed(1)}</span>
        </div>
    )
}