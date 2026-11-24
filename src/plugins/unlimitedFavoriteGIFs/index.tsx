import definePlugin from "@utils/types";

export default definePlugin({
    name: "UnlimitedFavoriteGIFs",
    description: "Removes the limit on how many GIFs you can favorite",
    authors: [{ name: "om3ga6400", id: 1232072032590758069n }],

    patches: [
        {
            find: "#{intl::FAVORITE_GIFS_LIMIT_REACHED_BODY}",
            replacement: {
                match: /\.toBinary\((\i)\)\.length>\d+/,
                replace: ".toBinary($1).length>Infinity"
            }
        }
    ]
});
