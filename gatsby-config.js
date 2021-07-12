module.exports = {
    siteMetadata: {
        title: "Segun Owoeye LP",
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: "GrZm7N6RXMk-fJwo9NaCpUBHrGilhCRlFcd71Dgodio",
                spaceId: "0drjnduvy6on",
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-anchor-links",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
