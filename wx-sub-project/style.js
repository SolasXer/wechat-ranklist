// viewport = 1000*1200

module.exports = {
    container: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
    },

    rankList: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0000FF00',
    },

    list: {
        width: '100%',
        height: '100%',
    },

    listItem: {
        width: '100%',
        height: 180, // ori is 180
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    listItemUserData: {
        width: '75%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    listItemScore: {
        width: '25%',
        height: '100%',
        fontSize: 45,
        lineHeight: 180,
        color: '#ffffff',
        textAlign: 'center',
        paddingRight: 10,
    },

    listItemNum: {
        width: 150,
        height: '100%',
        fontSize: 45,
        color: '#baf7fb',
        lineHeight: 180,
        textAlign: 'center',
    },

    listItemTop3Img: {
        width: 90,
        height: 90,
        marginLeft: 30,
        marginRight: 30,
    },

    listHeadImg: {
        borderRadius: 6,
        width: 120,
        height: 120,
    },

    listItemName: {
        width: 200,
        height: '100%',
        fontSize: 40,
        lineHeight: 180,
        marginLeft: 30,
        color: '#baf7fb',
    },
};
