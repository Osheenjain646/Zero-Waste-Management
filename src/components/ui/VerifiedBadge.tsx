export default function VerifiedBadge({ className = '' }: { className?: string }) {
  return (
    <svg 
      className={`shrink-0 ${className}`} 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Verified account"
    >
      <path 
        d="M22.5 12.5c0-1.58-.875-2.915-2.14-3.594l.439-4.14-4.102-.683c-.808-1.365-2.247-2.22-3.864-2.22-1.616 0-3.056.855-3.864 2.22l-4.102.683.439 4.141c-1.265.679-2.14 2.015-2.14 3.593 0 1.58.875 2.915 2.14 3.594l-.439 4.14 4.102.684c.808 1.364 2.248 2.219 3.864 2.219 1.617 0 3.056-.855 3.864-2.219l4.102-.684-.439-4.14c1.265-.679 2.14-2.014 2.14-3.593Z" 
        fill="currentColor"
      />
      <path 
        d="M10.5 16.5l-4-4 1.4-1.4 2.6 2.6 6.6-6.6 1.4 1.4-8 8Z" 
        fill="#ffffff" 
      />
    </svg>
  )
}
