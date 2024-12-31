(()=>{"use strict";var n={208:(n,t,e)=>{e.d(t,{A:()=>h});var r=e(601),o=e.n(r),i=e(314),a=e.n(i),s=e(417),l=e.n(s),c=new URL(e(124),e.b),d=a()(o()),p=l()(c);d.push([n.id,`* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --powder-blue: rgb(161, 214, 203, 0.75);\n    --comfy-red: rgb(255, 131, 131, 0.75);\n    --bone-powder-grey: rgb(226, 226, 226);\n    --confused-purple: rgb(161, 154, 211, 0.75);\n    --height: 100dvh;\n    --width: 100vw;\n    --navigation-width: calc(max(var(--width), var(--height)) * 0.05);\n}\n\nhtml {\n    overflow: hidden;\n}\n\n@keyframes reveal {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\nbody {\n    height: 100dvh;\n    pointer-events: none;\n    display: grid;\n    overflow: hidden;\n    perspective: 2500px;\n    scrollbar-width: none;\n}\n\n#cube {\n    pointer-events: none;\n    position: fixed;\n    display: grid;\n    position: relative;\n    width: var(--width);\n    height: var(--height);\n    place-self: center;\n    transform-style: preserve-3d;\n    transition-property: transform;\n    transition-duration: 0.75s;\n    transition-timing-function: ease-in-out;\n}\n\n.rotate-left {\n    transform: translateX(calc((var(--width) - var(--height)) / 2)) rotateY(-90deg);\n}\n\n.rotate-right {\n    transform: translateX(calc((var(--height) - var(--width)) / 2)) rotateY(90deg);\n}\n\n.rotate-up {\n    transform: rotateX(90deg);\n}\n\n.rotate-down {\n    transform: rotateX(-90deg);\n}\n\n\n.face {\n    width: var(--width);\n    height: var(--height);\n    position: absolute;\n    display: grid;\n    place-items: center;\n    border: 1px solid black;\n    transition-duration: 1s;\n    opacity: 0;\n    pointer-events: none;\n}\n\n.navigatorButtons {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 100%;\n    background-color: rgb(255, 255, 255, 0.66);\n    width: var(--navigation-width);\n    cursor: pointer;\n    img {\n        width: 100%;\n    }\n}\n\n#upArrowNavigator {\n    top: calc(var(--navigation-width) * -1 / 2);\n    transform: rotateZ(-90deg);\n}\n#downArrowNavigator {\n    bottom: calc(var(--navigation-width) * -1/ 2);\n    transform: rotateZ(90deg);\n}\n#leftArrowNavigator {\n    left: calc(var(--navigation-width) * -1/ 2);\n    transform: rotateZ(180deg);\n}\n#rightArrowNavigator {\n    right: calc(var(--navigation-width) * -1/ 2);\n}\n\n.visible {\n    opacity: 1;\n    pointer-events: all;\n}\n\n#front {\n    transform: translateZ(calc((var(--height) * -1) / 2));\n    display: grid;\n    place-items: center;\n}\n\n#frontwrapper {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    width: auto;\n    grid-template-columns: 3fr 2fr;\n    grid-template-rows: repeat(2, 1fr);\n    place-items: center;\n    overflow: hidden;\n\n    .info {\n        overflow: scroll;\n        scrollbar-width: none;\n        height: 90%;\n        width: 90%;\n        padding: 5%;\n        grid-row: 1 / 3;\n    }\n\n    .socials {\n        border: 1px solid black;\n        display: grid;\n        place-items: center;\n        place-self: center;\n        grid-template-rows: 3fr 1fr;\n        grid-row: 1 / 3;\n        width: 85%;\n        height: calc(10% + 40vw);\n        object-fit: contain;\n\n        .links {\n            width: 100%;\n            grid-row: 2 / 3;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-evenly;\n\n            a {\n                width: 15%;\n                cursor: pointer;\n                aspect-ratio: 1 / 1;\n                object-fit: contain;\n            }\n\n            img[src$=".svg"] {\n                max-width: 100%;\n            }\n        }\n\n        img[src$=".jpeg"] {\n            max-width: 80%;\n            max-height: 80%;\n        }\n    }\n}\n\n#left {\n    background-color: var(--powder-blue);\n    transform: translate3d(-50%, 0, calc((var(--width) - var(--height)) / 2)) rotateY(90deg);\n}\n\n#leftwrapper {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 5rem 2.5rem auto;\n    overflow: hidden;\n\n    h1 {\n        padding: 1rem;\n    }\n\n    .gridContainer {\n        width: 100%;\n        height: auto;\n        scrollbar-width: none;\n        overflow-y: scroll;\n        display: grid;\n        place-items: center;\n    }\n\n    #projectGrid {\n        display: grid;\n        border: none;\n        width: 90%;\n        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n\n        a {\n            display: grid;\n            grid-template-rows: 1fr 4rem;\n            margin: 2.5%;\n            min-height: 400px;\n            padding: 20px;\n            background-color: #ffffff;\n            transition-duration: 0.5s;\n            object-fit: contain;\n            text-decoration: none;\n            color: black;\n\n            img {\n                max-width: 100%;\n                border: 1px solid black;\n            }\n\n            p {\n                margin-top: 1.5rem;\n                text-align: center;\n                font-size: 2rem;\n            }\n\n        }\n\n        a:hover {\n            box-shadow: 0 0 5px 5px rgb(128, 128, 128);\n        }\n\n        a:visited {\n            color: black;\n        }\n    }\n\n    .scrollContainer {\n        width: 97%;\n        place-self: center;\n        border: 2px solid white;\n        border-radius: 2rem;\n    }\n\n    .projectScrollBar {\n        border-radius: 2rem;\n        align-self: center;\n        height: 0.9rem;\n        width: 0;\n        background-color: white;\n    }\n}\n\n#right {\n    transform: translate3d(50%, 0, calc((var(--width) - var(--height)) / 2)) rotateY(-90deg);\n    background-color: var(--bone-powder-grey);\n    position: relative;\n\n    .errorAlert {\n        position: absolute;\n        width: calc(100% - 2px);\n        height: calc(100% - 2px);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 1;\n        text-align: center;\n        backdrop-filter: blur(10px);\n    }\n\n    h1 {\n        padding: 1rem;\n\n        a {\n            transition-duration: 0.25s;\n            color: inherit;\n        }\n\n        a:hover {\n            color: rgb(0, 119, 255);\n        }\n\n        a:visted {\n            color: rgb(0, 119, 255);\n        }\n    }    \n}\n\n.lds-hourglass,\n.lds-hourglass:after {\n    box-sizing: border-box;\n}\n\n.lds-hourglass {\n    display: inline-block;\n    position: relative;\n    color: var(--comfy-red);\n    width: 80px;\n    height: 80px;\n}\n\n.lds-hourglass:after {\n    content: " ";\n    display: block;\n    border-radius: 50%;\n    width: 0;\n    height: 0;\n    margin: 8px;\n    box-sizing: border-box;\n    border: 32px solid currentColor;\n    border-color: currentColor transparent currentColor transparent;\n    animation: lds-hourglass 1.5s infinite;\n}\n\n@keyframes vanish {\n    0% {\n        opacity: 1;\n    } 100% {\n        opacity: 0;\n    }\n}\n\n.disappear {\n    animation: vanish;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n}\n\n@keyframes lds-hourglass {\n    0% {\n        transform: rotate(0);\n        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n\n    50% {\n        transform: rotate(900deg);\n        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n\n    100% {\n        transform: rotate(1800deg);\n    }\n}\n\n#rightwrapper {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 5rem 1fr;\n    overflow: hidden;\n\n    .gridContainer {\n        grid-template-columns: 4fr 3fr;\n        width: 100%;\n        height: auto;\n        scrollbar-width: none;\n        overflow-y: scroll;\n        display: grid;\n        place-items: center;\n    }\n\n    .codingInfo {\n        width: 85%;\n        height: 85%;\n        padding: 2.5%;\n        box-shadow: 0 0 10px 2px rgb(128, 128, 128);\n        background-color: white;\n        border-radius: 0.5rem;\n    }\n\n    #questionsInfo {\n        display: grid;\n        grid-column: 1 / 2;\n        grid-template-rows: 7rem min-content 1fr;\n        place-items: center;\n        text-align: center;\n\n        .questionsSolved {\n            place-self: center;\n            width: 95%;\n            display: grid;\n            grid-template-rows: repeat(3, 7.5ch);\n            grid-template-columns: 8ch 1fr;\n            place-items: center;\n            transition-duration: 0.5s;\n        }\n\n        .rankHeading {\n            justify-self: self-start;\n        }\n\n        .enlarge {\n            transition-duration: 0.5s;\n        }\n\n        .enlarge:hover {\n            transform: scale(1.05);\n        }\n\n        #easyBar {\n            --color: lightgreen;\n        }\n\n        #mediumBar {\n            --color: yellow;\n        }\n\n        #hardBar {\n            --color: red;\n        }\n\n        .bar {\n            background-color: var(--color);\n            height: 100%;\n            border-radius: 1.5rem;\n        }\n\n        .progressBar {\n            width: 100%;\n            height: 2rem;\n            border-radius: 1.5rem;\n            border: 2px solid var(--color);\n            position: relative;\n            overflow: hidden;\n            display: grid;\n        }\n\n        .fractionCompleted {\n            position: absolute;\n            place-self: center;\n        }\n    }\n\n    #contestInfo {\n        display: grid;\n        grid-column: 2 / 3;\n        align-items: center;\n        justify-items: start;\n        grid-template-rows: repeat(5, 1fr);\n\n        .contestTitles {\n            list-style: none;\n            font-size: 1.75rem;\n            margin-left: 1.5rem;\n            transition-duration: 0.5s;\n            padding: 0.25rem;\n            padding-left: 0.5rem;\n            border-left: 0.5rem solid var(--comfy-red);\n        }\n\n        .contestTitles:hover {\n            transform: scale(1.1);\n            margin-left: 3rem;\n        }\n    }\n}\n\n@keyframes floating {\n\t0% {\n\t\ttransform: scale(1);\n\t}\n    16% {\n        transform: scale(1.05);\n    }\n\t32% {\n\t\ttransform: scale(1);\n\t}\n    48% {\n        transform: scale(1.1);\n    }\n    64% {\n        transform: scale(1);\n    }\n\t100% {\n        transform: scale(1);\n\t}\n}\n\n\n#up {\n    background-color: var(--comfy-red);\n    transform: translateY(-50%) rotateX(-90deg);\n    .scrollable {\n        height: 100%;\n        overflow: scroll;\n        scrollbar-width: none;\n    }\n    #upwrapper {\n        height: 100%;\n        width: 100%;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        place-items: center;\n    }\n    #skillContainer {\n        display: grid;\n        grid-template-rows: 7.5rem 1fr;\n        width: 85%;\n        height: 85%;\n        padding: 2.5%;\n        border-radius: 1rem;\n        background-color: rgba(255, 255, 255, 0.25);\n        box-shadow: 0 0 10px 10px rgba(63, 63, 63, 0.25);\n        h1 {\n            font-size: 2.5rem;\n        }\n        #skills {\n            border-radius: 1rem;\n            display: flex;\n            flex-wrap: wrap;\n            align-items: center;\n            justify-content: space-around;\n            a {\n                text-decoration: none;\n                width: 18%;\n                padding: 2.5%;\n                animation-name: floating;\n                animation-duration: 1s;\n                animation-timing-function: linear;\n                animation-fill-mode: forwards;\n                animation-iteration-count: infinite;\n                img {\n                    width: 100%;\n                }\n            }\n        }\n    }\n    #empty {\n        background-color: white;\n        box-shadow: 0 0 10px 10px rgba(63, 63, 63, 0.25);\n        border-radius: 1rem;\n        width: 85%;\n        height: 85%;\n        padding: 2.5%;\n        display: grid;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        font-size: 2rem;\n        grid-column: 2 / 3;\n    }\n}\n\n#down {\n    background-color: var(--confused-purple);\n    transform: translateY(50%) rotateX(90deg);\n    display: grid;\n    grid-template-rows: 5rem calc(100% - 5rem);\n    .scrollable {\n        height: 100%;\n        overflow: scroll;\n        scrollbar-width: none;\n    }\n}\n#downwrapper {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 4fr 3fr;\n    .placards {\n        background-color: rgb(226, 226, 226, 0.5);\n        box-shadow: 0 0 10px rgb(128, 128, 128);\n        transition-duration: 0.5s;\n        border-radius: 1rem;\n        &:hover {\n            box-shadow: 0 0 15px rgb(88, 88, 88);\n        }\n    }\n    #youtubeVideoSection {\n        display: grid;\n        width: 90%;\n        margin: 2.5%;\n        padding: 2.5%;\n        grid-template-rows: 5rem 5rem auto;\n        grid-column: 1 / 2;\n        grid-row: 1 / 3;\n        iframe {\n            place-self: center;\n            width: 100%;\n            aspect-ratio: 16 / 9;\n            border-radius: 2rem;\n            box-shadow: 0 0 5px 0 rgb(128, 128, 128);\n            transition-duration: 0.5s;\n            &:hover {\n                box-shadow: 0 0 15px 0 rgb(128, 128, 128);\n            }\n        }\n    }\n    #lameJokeSection {\n        display: grid;\n        grid-template-rows: 5rem auto;\n        width: 90%;\n        margin: 2.5%;\n        padding: 2.5%;\n        grid-column: 2 / 3;\n        text-align: center;\n        place-items: center;\n        h2 {\n            text-decoration: underline;\n            -webkit-text-stroke: 2px black;\n        }\n    }\n    #somethingInteresting {\n        background-image: url(${p});\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n\n        object-fit: cover;\n        text-align: center;\n        width: 90%;\n        margin: 2.5%;\n        padding: 2.5%;\n        grid-column: 2 / 3;\n        color: white;\n        font-weight: 900;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        h2 {\n            -webkit-text-stroke: 2px white;\n            letter-spacing: 0.1rem;\n            background-color: black;\n            padding: 1rem;\n        }\n    }\n}\n\n@media (max-width: 768px) {\n    #frontwrapper {\n        grid-template-columns: 1fr;\n        overflow: scroll;\n        scrollbar-width: none;\n        grid-template-rows: auto auto;\n\n        .info {\n            grid-row: 1 / 2;\n            overflow: visible;\n        }\n\n        .socials {\n            margin-top: 1.5rem;\n            margin-bottom: 1.5rem;\n            height: fit-content;\n            grid-template-columns: 3fr 1fr;\n            grid-template-rows: 1fr;\n            grid-row: 2 / 3;\n\n            .links {\n                height: 100%;\n                grid-column: 2 / 3;\n                grid-row: 1 / 2;\n                flex-direction: column;\n\n                a {\n                    width: 50%;\n                    cursor: pointer;\n                }\n            }\n        }\n    }\n\n    #leftwrapper {\n        #projectGrid {\n            grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));\n        }\n    }\n\n    #rightwrapper {\n        .gridContainer {\n            display: grid;\n            overflow-y: scroll;\n            grid-template-columns: 1fr;\n            grid-template-rows: 1fr 1fr;\n            place-items: center;\n        }\n\n        .codingInfo {\n            width: 85%;\n            padding-bottom: 2rem;\n        }\n\n        #questionsInfo {\n            grid-column: 1 / 2;\n        }\n\n        #contestInfo {\n            grid-column: 1 / 2;\n\n            .contestTitles {\n                margin-bottom: 1rem;\n            }\n        }\n    }\n    #downwrapper {\n        height: auto;\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n\n        #youtubeVideoSection {\n            width: 90%;\n            grid-column: 1 / 2;\n            grid-row: 1 / 2;\n        }\n        #lameJokeSection {\n            grid-column: 1 / 2;\n            grid-row: 2 / 3;\n        }\n        #somethingInteresting {\n            grid-column: 1 / 2;\n            grid-row: 3 / 4;\n        }\n    }\n    #up {\n        #upwrapper {\n            grid-template-columns: 1fr;\n            grid-template-rows: 1fr 1fr;\n            height: auto;\n        }\n        #skillContainer {\n            margin-top: 2.5%;\n            grid-column: 1 / 2;\n            grid-row: 1 / 2;\n            width: 90%;\n            height: fit-content;\n        }\n        #empty {\n            width: 90%;\n            grid-column: 1 / 2;\n            grid-row: 2 / 3;\n        }\n    }\n}`,""]);const h=d},472:(n,t,e)=>{e.d(t,{A:()=>h});var r=e(601),o=e.n(r),i=e(314),a=e.n(i),s=e(417),l=e.n(s),c=new URL(e(275),e.b),d=a()(o()),p=l()(c);d.push([n.id,`@font-face {\n    font-family: "Raleway";\n    src: url(${p});\n}\n\nbody {\n\tfont-size: 20px;\n    font-family: "Raleway", sans-serif;\n\t--paragraph-space: 2rem;\n\t--title-space: 1rem;\n\tfont-weight: 200;\n}\n\n.space-text-above,\np + h1,\np + h2,\np + h3,\np + h4,\np + h5,\np + h6,\nh1 + h2,\nh2 + h3,\nh3 + h4,\nh4 + h5,\nh5 + h6 {\n\tmargin-top: var(--paragraph-space);\n}\n\nh1 + p,\nh2 + p,\nh3 + p,\nh4 + p,\nh5 + p,\nh6 + p {\n\tmargin-top: var(--title-space);\n}\n\np + p {\n\tmargin-top: var(--title-space);\n}\n\nh1 + p,\nh2 + p,\nh3 + p,\nh4 + p,\nh5 + p,\nh6 + p,\n.space-text-below {\n\tmargin-bottom: var(--paragraph-space);\n}\n\np.bold,\nspan.bold,\n.body-1.bold,\n.body-2.bold,\np .bold,\nspan .bold,\n.body-1 .bold,\n.body-2 .bold,\np strong,\nspan strong,\n.body-1 strong,\n.body-2 strong,\np b,\nspan b,\n.body-1 b,\n.body-2 b {\n\t\tfont-weight: 700;\n\t}\n\n\nh1, .title-1 ,h2, .title-2 ,h3, .title-3 ,h4, .title-4 ,h5, .title-5 ,h6, .title-6  {\n\t\tfont-style: normal;\n\t\ttext-transform: none;\n\t\tmax-width: 768px;\n\t}\n\n\tp,\n\t.max-w-text {\n\t\tmax-width: 768px;\n\t}\n\n\nh1, .title-1 {\n    font-size: 38px;\n    line-height: 40px;\n    font-weight: 400;\n    letter-spacing: -0.001em;\n}\n\nh2, .title-2 {\n    font-size: 36px;\n    line-height: 44px;\n    font-weight: 400;\n    letter-spacing: -0.001em;\n}\n\nh3, .title-3 {\n    font-size: 32px;\n    line-height: 44px;\n    font-weight: 300;\n    letter-spacing: -0.001em;\n}\n\nh4, .title-4 {\n    font-size: 30px;\n    line-height: 44px;\n    font-weight: 300;\n    letter-spacing: -0.001em;\n}\n\nh5, .title-5 {\n    font-size: 26px;\n    line-height: 40px;\n    font-weight: 200;\n    letter-spacing: -0.001em;\n}\n\nh6, .title-6 {\n    font-size: 24px;\n    line-height: 44px;\n    font-weight: 200;\n    letter-spacing: -0.001em;\n}\n\np, button, .body-1 {\n    font-size: 20px;\n    line-height: 32px;\n    font-weight: 400;\n    letter-spacing: 0.001em;\n}\n\nlabel, figcaption, input, .body-2 {\n    font-size: 18px;\n    line-height: 28px;\n    font-weight: 400;\n    letter-spacing: 0.024em;\n}\n\n.tooltip {\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 400;\n    letter-spacing: 0.043em;\n}\n\n    \n    @media (min-width: 768px) {\n\t\tbody {\n\t\t\tfont-size: 22px;\n\t\t}\n\n        h1, .title-1 {\n            font-size: 48px;\n            line-height: 52px;\n        }\n        h2, .title-2 {\n            font-size: 44px;\n            line-height: 52px;\n        }\n        h3, .title-3 {\n            font-size: 38px;\n            line-height: 52px;\n        }\n        h4, .title-4 {\n            font-size: 34px;\n            line-height: 48px;\n        }\n        h5, .title-5 {\n            font-size: 30px;\n            line-height: 48px;\n        }\n        h6, .title-6 {\n            font-size: 28px;\n            line-height: 48px;\n        }\n        p, button, .body-1 {\n            font-size: 22px;\n            line-height: 32px;\n        }\n        label, figcaption, input, .body-2 {\n            font-size: 20px;\n            line-height: 32px;\n        }\n        .tooltip {\n            font-size: 18px;\n            line-height: 28px;\n        }\n    }`,""]);const h=d},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var h=e(p),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(g);else{var u=o(g,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var l=r(n,o),c=0;c<i.length;c++){var d=e(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},275:(n,t,e)=>{n.exports=e.p+"fonts/Raleway.d8040b0c.ttf"},124:(n,t,e)=>{n.exports=e.p+"images/yellow-warning-ribbons.f5f9aef5.jpg"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),o=e.n(r),i=e(825),a=e.n(i),s=e(659),l=e.n(s),c=e(56),d=e.n(c),p=e(540),h=e.n(p),g=e(113),u=e.n(g),m=e(472),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=h(),o()(m.A,f),m.A&&m.A.locals&&m.A.locals;var b=e(208),w={};w.styleTagTransform=u(),w.setAttributes=d(),w.insert=l().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=h(),o()(b.A,w),b.A&&b.A.locals&&b.A.locals;const v=e.p+"images/double_arrow.4834342f.svg",y="http://localhost:3000/";async function x(n){let t;t="questions"==n?y+"userProfile/laldasji":y+"laldasji/contest";try{const n=await fetch(t);if(!n.ok)throw new Error("Too many requests!");return await n.json()}catch(n){return console.error("There was a problem with the fetch operation:",n),-1}}function k(){const n=document.querySelector("#right"),t=document.querySelector(".errorAlert");t.classList.add("disappear"),setTimeout((()=>{n.removeChild(t)}),1e3)}const S=document.querySelector("#front"),C=document.querySelector("#cube"),A=document.querySelector("#up"),T=document.querySelector("#down"),q=document.querySelector("#left"),L=document.querySelector("#right");function E(){R=0==R[0]?[1,0]:1==R[0]?[-1,0]:[0,0],P()}function z(){R=0==R[0]?[-1,0]:-1==R[0]?[1,0]:[0,0],P()}function j(){R=0==R[1]?[0,-1]:-1==R[1]?[0,1]:[0,0],P()}function N(){R=0==R[1]?[0,1]:1==R[1]?[0,-1]:[0,0],P()}function $(n){const t=document.createElement("span"),e=document.createElement("span"),r=document.createElement("span"),o=document.createElement("span");t.classList.add("navigatorButtons"),e.classList.add("navigatorButtons"),r.classList.add("navigatorButtons"),o.classList.add("navigatorButtons");const i=document.createElement("img"),a=document.createElement("img"),s=document.createElement("img"),l=document.createElement("img");i.src=v,a.src=v,s.src=v,l.src=v,t.appendChild(i),e.appendChild(a),r.appendChild(s),o.appendChild(l),t.id="upArrowNavigator",e.id="downArrowNavigator",r.id="leftArrowNavigator",o.id="rightArrowNavigator",t.addEventListener("click",E),e.addEventListener("click",z),r.addEventListener("click",j),o.addEventListener("click",N),n.appendChild(t),n.appendChild(e),n.appendChild(r),n.appendChild(o)}let M=S,R=[0,0];function I(n,t){M.classList.remove("visible"),function(n){const t=n.querySelectorAll(".navigatorButtons");setTimeout((()=>{for(let e=0;e<t.length;e++)n.removeChild(t[e])}),500)}(M),C.classList=t,n.classList.add("visible"),$(n),M=n}function P(){0==R[0]?0==R[1]?I(S,""):1==R[1]?I(L,"rotate-right"):I(q,"rotate-left"):1==R[0]?I(A,"rotate-up"):I(T,"rotate-down")}S.classList.add("visible"),$(S),window.addEventListener("keydown",(n=>{"ArrowUp"==n.key?E():"ArrowDown"==n.key?z():"ArrowLeft"==n.key?j():"ArrowRight"==n.key&&N(),P()})),document.querySelector("#copyEmail").addEventListener("click",(async()=>{try{await navigator.clipboard.writeText("abhinavashutoshlaldas@gmail.com"),alert("Text copied to clipboard!")}catch(n){console.error("Failed to copy: ",n)}}));const H=document.querySelector(".gridContainer"),B=document.querySelector(".projectScrollBar");H.addEventListener("scroll",(()=>{const n=H.scrollHeight-H.clientHeight,t=H.scrollTop/n;B.style.width=100*t+"%"})),async function(){!function(){const n=document.querySelector("#right"),t=document.createElement("div");t.classList.add("errorAlert");const e=document.createElement("div");e.classList.add("lds-hourglass"),t.append(e),n.append(t)}(),console.log("huhohaha");const n=document.querySelector("#actualProgressEasy"),t=document.querySelector("#actualProgressMedium"),e=document.querySelector("#actualProgressHard"),r=await x("questions"),o=await x("contest");-1!=r&&-1!=o||(k(),function(){const n=document.querySelector("#right"),t=document.createElement("div");t.classList.add("errorAlert"),t.innerHTML='<h1>Oops! Seems like the API has had a bit too many requests!\n                            <br>\n                            <br>\n                            You can still visit <a href="https://leetcode.com/u/laldasji" target="_blank">My Leetcode Profile</a>\n                            </h1>',n.appendChild(t)}()),n.style.width=Number(r.totalSubmissions[1].count)/Number(r.totalEasy)*100+"%",t.style.width=Number(r.totalSubmissions[2].count)/Number(r.totalMedium)*100+"%",e.style.width=Number(r.totalSubmissions[3].count)/Number(r.totalHard)*100+"%";const i=document.querySelector(".easyFractionCompleted"),a=document.querySelector(".mediumFractionCompleted"),s=document.querySelector(".hardFractionCompleted");i.textContent=`${Number(r.totalSubmissions[1].count)}/${Number(r.totalEasy)}`,a.textContent=`${Number(r.totalSubmissions[2].count)}/${Number(r.totalMedium)}`,s.textContent=`${Number(r.totalSubmissions[3].count)}/${Number(r.totalHard)}`;const l=document.querySelector("#leetcodeRank");let c=String(r.ranking),d="",p=c.length;for(let n=p-1;n>=0;n--)d+=c[n],p-n!=0&&(p-n)%3==0&&(d+=",");d=d.split("").reverse().join(""),l.innerHTML=`<h1>Ranking:<br>${d}</h1>`;const h=document.querySelector("#contestRating"),g=document.querySelector("#contestsAttended"),u=document.querySelector("#contestRank"),m=document.querySelector("#contestPercentage"),f=document.querySelector("#globalRank");h.innerHTML=`Contest Rating:<br><b>${o.contestRating.toFixed(0)}</b>`,g.innerHTML=`Contests Attended:<br><b>${o.contestAttend}</b>`,u.innerHTML=`Last Ranking:<br><b>${o.contestParticipation[o.contestParticipation.length-1].ranking}</b>`,m.innerHTML=`Contest Top %:<br><b>${o.contestTopPercentage}</b>%`,f.innerHTML=`Global Ranking:<br><b>${o.contestGlobalRanking}</b> / ${o.totalParticipants}`,setTimeout((()=>{k()}),250)}()})();