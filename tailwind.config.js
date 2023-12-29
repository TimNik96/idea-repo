/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,tsx}", "./index.html"],
    theme: {
        extend: {
            colors: {
                fingerprint: {
                    red: "#DD4444",
                    blue: "#2463EB",
                    green: "#56AE56",
                },
                plain: {
                    black: "#000000",
                    white: "#FFFFFF",
                    grey: "#666666",
                },
                unreachable: {
                    DEFAULT: "#E8E8E8",
                    dark: "#BDBDBD",
                },
                theme: {
                    DEFAULT: "#F6F9FF",
                },
                customgraybackground: "E5E5E5",
                customgrayfont: "#929191",
                table: "#f5f5f5",
                tableborder: "#dcdcdc",
                thhover: "#e0e0e0",
                subdiv: "#ccc",
            },
            spacing: {
                0: "0px",
                0.1: "0.025rem", // 0.4px
                0.25: "1px",
                0.5: "0.125rem", // 2px
                0.75: "0.1975rem", // 3px
                1: "0.25rem", // 4px
                1.5: "0.375rem", // 6px
                2: "0.5rem", // 8px
                2.5: "0.625rem", // 10px
                3: "0.75rem", // 12px
                3.5: "0.875rem", // 14px
                4: "1rem", // 16px
                4.5: "1.125rem", // 18px
                5: "1.25rem", // 20px
                5.5: "1.375rem", // 22px
                6: "1.5rem", // 24px
                6.5: "1.625rem", // 26px
                7: "1.75rem", // 28px
                7.5: "1.875rem", // 30px
                8: "2rem", // 32px
                9: "2.25rem", // 36px
                10: "2.5rem", // 40px
                11: "2.75rem", // 44px
                12: "3rem", // 48px
                14: "3.5rem", // 56px
                16: "4rem", // 64px
                20: "5rem", // 80px
                24: "6rem", // 96px
                28: "7rem", // 112px
                32: "8rem", // 128px
                36: "9rem", // 144px
                40: "10rem", // 160px
                44: "11rem", // 176px
                48: "12rem", // 192px
                52: "13rem", // 208px
                56: "14rem", // 224px
                60: "15rem", // 240px
                64: "16rem", // 256px
                72: "18rem", // 288px
                80: "20rem", // 320px
                96: "24rem", // 384px
                98: "28rem",
                gap: "0.5rem",
                select: "24rem",
                div: "52.5rem",
                listbox: "15rem",
                divs: "105rem",
                span: "48.5rem",
                divH: "35.5rem",
            },
            fontSize: {
                def: "0.8rem",
                med: "1rem",
            },
            boxShadow: {
                def: "1px 1px 1px rgba(0, 0, 0, 0.1)",
            },
            borderRadius: {
                px: "1px",
                none: "0px",
                sm: "0.125rem",
                def: "0.25rem",
                md: "0.5rem",
                lg: "0.625rem",
                xl: "0.75rem",
                xxxl: "1.125rem",
                5: "5px",
                // eslint-disable-next-line func-names
                fully: "9999px",
            },
        },
    },
    plugins: [],
}
