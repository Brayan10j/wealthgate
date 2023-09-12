<script setup>

</script>

<template>
    <v-container class="fill-height base">
        <v-row>
            <v-col>
                <video autoplay muted loop id="heroVideoBackground">
                    <source src="/videos/backgrounds/home-hero-background.mp4" type="video/mp4" />
                </video>

                <div class="branding-logo ">
                    <img src="/icons/sionland-logo-purple.png" alt="SionLand Logo Purple" />
                    <span class="logo-text ">SionLand</span>
                </div>

                <h1 class="
          catchphrase
          mt-16
          mb-16
          py-8
        ">
                    <div class="sub-heading font-weight-bold">
                        <span>DECENTRALIZED GEODATA&nbsp;</span>
                        <span class="text-grey ">FOR</span>
                    </div>

                    <span class="heading font-weight-bold text-h3 text-md-h2 text-lg-h1">MULTIVERSE</span>
                </h1>

                <NuxtLink class="ecosystem-link">
                    <span class="opacity-75">ENTER THE GEO DATA ECOSYSTEM</span>
                </NuxtLink>

            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
.base {
    position: relative;
    z-index: 1;
}

#heroVideoBackground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    object-fit: cover;
    opacity: 0.5;
}

.background-blur {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    transition: 0.3s ease;
    animation: fadeIn 0.3s;
    animation-fill-mode: forwards;
    z-index: 99;
}

.branding-logo {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        display: block;
        width: 75px;

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        animation-name: spin;
        animation-duration: 15000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    .logo-text {
        color: white;
        font-family: "Ailenrons";
        font-size: 3rem;
    }

    @media (max-width: 768px) {
        & {
            flex-direction: column;
        }

        .logo-text {
            font-size: 2.5rem;
        }

        img {
            width: 80%;
            max-width: 8rem;
        }
    }
}

.catchphrase {
    font-family: "Ubuntu", sans-serif;
    width: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .heading {
        background: linear-gradient(91.11deg, #dd00c7 -2.41%, #5a00cd 125.3%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        overflow: hidden;
        border-right: 0.05em solid white;
        animation: typing 2s steps(40, end),
            blink-caret 0.75s step-end infinite;

        @keyframes typing {
            from {
                width: 0;
            }

            to {
                width: 100%;
            }
        }

        @keyframes blink-caret {

            from,
            to {
                border-color: transparent;
            }

            50% {
                border-color: white;
            }
        }
    }

    .sub-heading {
        letter-spacing: 0.6rem;

        @media (max-width: 1400px) {
            & {
                font-size: 1rem;
            }
        }

        @media (max-width: 768px) {
            & {
                font-size: 1rem;
            }
        }
    }
}

.ecosystem-link {
    transition: 0.2s ease-out;
    padding-top: 3rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    color: white;

    &:hover {
        transform: translateY(-0.4rem);
        padding-bottom: 0.4rem;
    }

    span {
        letter-spacing: 0.6rem;
    }

    @media (max-width: 768px) {
        gap: 1rem;

        span {
            font-size: 0.8rem;
            letter-spacing: 1.4px;
        }

        img {}
    }
}

.light {
    .hero {
        background: rgba(255, 255, 255, 0.9);
    }

    .branding-logo {
        .logo-text {
            color: #141414;
        }
    }

    .catchphrase {
        .heading {
            background: linear-gradient(91.46deg, #83009d 3.43%, #560067 100.51%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }

        .sub-heading {
            color: #141414;
        }
    }

    .ecosystem-link {
        color: #141414;
    }
}
</style>