module.exports = {
    webpack: (config, { isServer }) => {
        // Add loader for images including GIFs
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: 'images/[name].[ext]',
                    },
                },
            ],
        });

        return config;
    },
    images: {
        disableStaticImages: true,
    },
};
