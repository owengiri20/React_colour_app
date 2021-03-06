// // Extra small devices (portrait phones, less than 576px)
// @media(max - width: 575.98px) { ... }

// // Small devices (landscape phones, less than 768px)
// @media(max - width: 767.98px) { ... }

// // Medium devices (tablets, less than 992px)
// @media(max - width: 991.98px) { ... }

// // Large devices (desktops, less than 1200px)
// @media(max - width: 1199.98px) { ... }

export default {
    up() {

    },

    down(size) {
        const sizes = {
            xs: "576px",
            sm: "767px",
            md: "991px",
            lg: "1199px",
            xl: "1399px",

        }
        return `@media (max-width: ${sizes[size]})`
    }
}