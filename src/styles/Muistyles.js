import { makeStyles } from "@mui/styles";

export const GamemuiStyles = makeStyles({

    gamePage: {
        minHeight: "100vh",
        width: "100%",
        background: "#FAF8EF",
        padding: "28px 20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        "@media (max-width: 600px)": {
            padding: "20px 12px",
        },
    },


    header: {
        width: "100%",
        maxWidth: 360,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18,

        "@media (max-width: 600px)": {
            maxWidth: 340,
            marginBottom: 15,
        },

        "@media (max-width: 380px)": {
            maxWidth: "100%",
        },
    },

    titleSection: {
        display: "flex",
        flexDirection: "column",

        "@media (max-width: 600px)": {
            maxWidth: "65%",
        },
    },


    logoRow: {
        display: "flex",
        alignItems: "center",

        "@media (max-width: 600px)": {
            alignItems: "flex-start",
        },
    },


    logo: {
        margin: 0,
        fontSize: 48,
        lineHeight: 1,
        fontWeight: 800,
        letterSpacing: "-3px",

        color: "#776E65",

        "@media (max-width: 600px)": {
            fontSize: 42,
            letterSpacing: "-2px",
        },

        "@media (max-width: 380px)": {
            fontSize: 38,
        },
    },


    subtitle: {
        margin: "5px 0 0",
        color: "#8F7A66",
        fontSize: 12,
        fontWeight: 500,
        whiteSpace: "nowrap",

        "& strong": {
            textDecoration: "underline",
        },

        "@media (max-width: 600px)": {
            fontSize: 11,
        },

        "@media (max-width: 380px)": {
            fontSize: 10,
        },
    },


    newGameButton: {
        height: 36,
        padding: "0 13px",
        border: "none",
        borderRadius: 8,
        background: "#8F7A66",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        gap: 6,

        fontSize: 12,
        fontWeight: 700,

        cursor: "pointer",

        whiteSpace: "nowrap",

        transition: "all 0.2s ease",

        "&:hover": {
            background: "#776E65",
            transform: "translateY(-1px)",
        },

        "&:active": {
            transform: "translateY(0)",
        },

        "@media (max-width: 600px)": {
            height: 34,
            padding: "0 11px",
            fontSize: 11,
            gap: 5,
        },

        "@media (max-width: 380px)": {
            height: 32,
            padding: "0 9px",
            fontSize: 10,
        },
    },

    gameBoard: {
        width: 450,
        height: 450,
        boxSizing: "border-box",
        background: "#BBADA0",
        padding: 8,
        borderRadius: 12,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        gap: 7,
        boxShadow: "0 4px 12px rgba(119, 110, 101, 0.12)",

        "@media (max-width: 600px)": {
            width: "min(360px, 92vw)",
            height: "min(360px, 92vw)",

            padding: 7,
            gap: 6,

            borderRadius: 11,
        },

        "@media (max-width: 380px)": {
            width: "92vw",
            height: "92vw",

            padding: 6,
            gap: 5,

            borderRadius: 10,
        },
    },

    emptyTile: {
        width: "100%",
        height: "100%",
        background: "#CDC1B4",
        borderRadius: 7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "@media (max-width: 600px)": {
            borderRadius: 6,
        },

        "@media (max-width: 380px)": {
            borderRadius: 5,
        },
    },

    tileValue: {
        width: "100%",
        height: "100%",
        borderRadius: 7,
        background: "#EEE4DA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#776E65",
        fontSize: 28,
        fontWeight: 700,
        boxShadow: "0 2px 3px rgba(0, 0, 0, 0.12)",

        "@media (max-width: 600px)": {
            borderRadius: 6,
            fontSize: 24,
        },

        "@media (max-width: 380px)": {
            borderRadius: 5,
            fontSize: 21,
        },
    },

    gameover_dialog: {
        borderRadius: 18,
        padding: 10,
        background: "#FAF8EF",
        "@media (max-width: 600px)": {
            margin: 15,
            borderRadius: 15,
        },
    },

    dialogContent: {
        padding: "30px !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",

        "@media (max-width: 600px)": {
            padding: "24px !important",
        },
    },

    gameOverIcon: {
        width: 70,
        height: 70,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F3E2D8",
        color: "#B85C38",
        marginBottom: 14,

        "& svg": {
            strokeWidth: 2,
        },

        "@media (max-width: 600px)": {
            width: 60,
            height: 60,
        },
    },

    winIcon: {
        width: 70,
        height: 70,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F8E5A8",
        color: "#C58A13",
        marginBottom: 14,

        "& svg": {
            strokeWidth: 2,
        },

        "@media (max-width: 600px)": {
            width: 60,
            height: 60,
        },
    },

    dialogTitle: {
        margin: 0,
        color: "#776E65",
        fontSize: 28,
        fontWeight: 800,
        "@media (max-width: 600px)": {
            fontSize: 24,
        },
    },

    dialogSubtitle: {
        margin: "8px 0 18px",
        color: "#8F7A66",
        fontSize: 14,
        "& strong": {
            color: "#776E65",
            fontWeight: 800,
        },
    },

    finalScore: {
        width: "100%",
        padding: "12px 15px",
        marginBottom: 18,
        boxSizing: "border-box",
        borderRadius: 10,
        background: "#EEE4DA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        "& span": {
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: 1,
            color: "#8F7A66",
        },

        "& strong": {
            fontSize: 26,
            fontWeight: 800,

            color: "#776E65",
        },
    },

    dialogButton: {
        width: "100%",
        height: 42,
        border: "none",
        borderRadius: 9,
        background: "#8F7A66",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        transition: "0.2s",

        "&:hover": {
            background: "#776E65",
        },
    },

    dialogActions: {
        width: "100%",
        display: "flex",
        gap: 8,
    },

    continueButton: {
        width: "100%",
        height: 42,
        border: "1px solid #D0C4B8",
        borderRadius: 9,
        background: "transparent",
        color: "#776E65",
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",

        "&:hover": {
            background: "#EEE4DA",
        },
    },

});