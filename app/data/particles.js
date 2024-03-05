const particleData = {
    fullScreen: {
        enable: true,
    },
    background: {
        color: {
            value: "",
        },
    },
    fpsLimit: 120,
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default:
                "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
            trail: {
                enable: true,
                length: 10,
                fill: {
                    color: ""
                }
            },
        },
        number: {
            density: {
                enable: true,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            options: {
                polygon: {
                    sides: 5
                }
            },
            type: "line"
        },
        size: {
            random: {
                enable: true,
                minimumValue: 1
            },
            value: 3,
        },

    },
    detectRetina: true,
};

export default particleData;
