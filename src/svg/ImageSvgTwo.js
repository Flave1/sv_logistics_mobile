import * as React from "react";
import Svg, {
    Circle,
    Path,
    Ellipse,
    G,
    Defs,
    ClipPath,
} from "react-native-svg";

const ImageSvgTwo = (props) => (
    <Svg
        width={297}
        height={297}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={148.5} cy={148.5} r={148.5} fill="#F3F7FF" />
        <Path
            d="M127.5 81c.5-1 .833-1.167 1-1.5h1.5s-1.833 1.333-1.5 3c.333 1.667 1.5 3.5 1.5 5s-1.5 3-1 5 .5 3.5 1 5.5 1.5 4 1 3-1.5-2-2-4 0-1.5-.5-4.5.5-3.5.5-5-.5-2-1-3-1-2.5-.5-3.5Z"
            fill="#222"
        />
        <Path
            d="M127.5 74c.5-1 .833-1.167 1-1.5h1.5s-1.833 1.333-1.5 3c.333 1.667 1.5 3.5 1.5 5s-1.5 3-1 5 .5 3.5 1 5.5 1.5 4 1 3-1.5-2-2-4 0-1.5-.5-4.5.5-3.5.5-5-.5-2-1-3-1-2.5-.5-3.5ZM172.636 81c-.5-1-.833-1.167-1-1.5h-1.5s1.834 1.333 1.5 3c-.333 1.667-1.5 3.5-1.5 5s.5 3 0 5-2.5 3.5-3 5.5-1.136 4-.636 3c.5-1 1.136-2 1.636-4s2-1.5 2.5-4.5.364-4 .364-5.5.636-1.5 1.136-2.5c.5-1 1-2.5.5-3.5Z"
            fill="#222"
        />
        <Path
            d="M172.636 76c-.5-1-.833-1.167-1-1.5h-1.5s1.834 1.333 1.5 3c-.333 1.667-1.5 3.5-1.5 5s.5 3 0 5-2.5 3.5-3 5.5-1.136 4-.636 3c.5-1 1.136-2 1.636-4s2-1.5 2.5-4.5.364-4 .364-5.5.636-1.5 1.136-2.5c.5-1 1-2.5.5-3.5Z"
            fill="#222"
        />
        <Ellipse cx={150} cy={61} rx={28} ry={31} fill="#201C1D" />
        <Path
            d="M194.95 130.917c3.44 8.091 5.955 17.663 6.392 19.453a159.945 159.945 0 0 1 4.404 30.792c.271 6.299 2.598 21.895-8.01 23.287-1.716.228-3.475-.271-5.004-1.007-6.59-3.201-7.953-13.195-8.979-19.009a335.99 335.99 0 0 1-4.687-41.775c-.325-6.659-1.455-17.027 4.011-22.358 4.116-4.01 8.452 2.57 11.873 10.617Z"
            fill="#FFD8C7"
        />
        <Path
            d="M194.991 172.503c.323.244.635.498.934.753 3.592 3.049 5.802 6.228 6.546 10.947.307 1.944-.024 3.851.155 5.762-.719-7.649-6.959-13.877-12.137-19.022 1.621-.271 3.155.542 4.502 1.56Z"
            fill="#F9B8AF"
        />
        <Path
            d="M181.568 229.173c-.589-.415-1.339-.518-2.058-.607.725-.03.961-1.113.513-1.682-.448-.568-1.222-.736-1.93-.896-2.64-.596-5.233-1.375-7.801-2.223-1.643-.541-3.218-.931-4.616-1.995-.32-.244-.657-.596-.57-.989a.987.987 0 0 1 .331-.482c2.322-2.125 4.521.479 7.024-.425.815-.292 1.491-1.067 1.437-1.922-2.125-.495-4.252-.98-6.381-1.455a6.965 6.965 0 0 0-4.168.06c-1.564.387-3.13.856-4.711 1.162-2.549.498-5.989-.994-8.257-2.042-3.611-1.671-6.766-4.162-9.97-6.518-11.07-8.123-14.502-7.163-26.962-12.979a60.245 60.245 0 0 0-5.873-2.462 26.74 26.74 0 0 0-1.062-.341c.891-2.437 1.55-4.817 2.118-6.74.051-.17.1-.341.152-.511 0-.019 0-.036.014-.054.238-.813.472-1.625.705-2.437.036-.128.071-.255.109-.38a353.288 353.288 0 0 0 2.835-10.614c-.736-3.737-1.613-7.446-2.27-11.197-1.202-6.873 6.027-19.973 6.323-26.944.182-4.305-5.354-11.528-5.145-12.803-2.582 1.706-5.332 5.635-7.833 10.078-4.382 7.785-8.007 17.149-8.65 18.903a162.997 162.997 0 0 0-7.959 30.492c-.706 4.425-2.948 13.361-.58 19.136.903 3.959 5.074 6.77 8.465 8.966 15.732 10.203 24.717 10.044 43.11 13.868 4.04.839 8.219 1.511 11.947 3.379 3.646 1.833 6.994 4.286 10.915 5.581 3.801 1.248 7.792 1.703 11.762 2.147.97.151 1.955.179 2.932.081a1.32 1.32 0 0 0-.334-1.354c1.338.508 2.765.741 4.195.685.839-.035 1.901-.441 1.847-1.275-.047-.574-.641-.937-1.195-1.099l2.199-.241c.348-.62-.016-1.457-.608-1.871Z"
            fill="#FFD8C7"
        />
        <Path
            d="M140.704 265.986c-14.797 3.986-38.106-7.438-33.307-31.681 3.529-17.885 8.398-37.405 6.049-55.677a101.398 101.398 0 0 0-1.005-5.995c-.735-3.737-1.612-7.446-2.27-11.197-1.199-6.871 4.032-19.968 4.329-26.936.182-4.305-3.354-11.528-3.145-12.803l.017-.097.315-.109c.382-.13 1.086-.373 2.022-.685 4.073-1.354 12.319-4.061 15.615-4.644a148.758 148.758 0 0 1 19.77-1.957c6.152-.239 12.335-.271 18.463.287 3.888.363 18.449 4.126 18.449 4.126s-4.139 10.266-4.506 15.882c-.652 10.021 2.982 28.387 2.329 38.404-.234 3.609-.47 7.243-.025 10.831.519 4.175 1.939 8.177 3.305 12.16C204.96 247.833 155.5 262 140.704 265.986Z"
            fill="#FD5252"
        />
        <Path
            d="M162.352 120.56c-5.124 4.603-11.809 5.034-17.855 2.978a25.6 25.6 0 0 1-6.943-3.666 1.523 1.523 0 0 1-.502-.517 1.622 1.622 0 0 1 0-1.048 89.65 89.65 0 0 0 2.27-16.563v-.163c.062-1.381.086-2.765.081-4.145-.024-1.25.22-2.491.714-3.64a8.032 8.032 0 0 1 2.093-2.813c3.53-3.103 8.993-3.791 13.191-1.67a7.262 7.262 0 0 1 2.682 2.165c.32.448.573.938.753 1.457.629 1.766.529 3.82.529 5.74 0 1.27.057 2.543.166 3.805a62.978 62.978 0 0 0 1.213 7.798c.492 2.256 3.473 8.608 1.608 10.282Z"
            fill="#FFD8C7"
        />
        <Path
            d="M144.497 123.53c-1.567-3.268-.815-6.978-.435-10.433.31-2.867.342-5.943-1.132-8.426-.47-.791-1.086-1.49-1.572-2.264-2.286-3.566-1.901-9.206 1.52-11.96 3.422-2.754 8.689-3.068 12.528-1.135a7.265 7.265 0 0 1 2.683 2.166c.319.448.573.938.752 1.457.63 1.766.53 3.82.53 5.74 0 1.27.057 2.543.165 3.805a62.98 62.98 0 0 0 1.214 7.798c.486 2.267 3.467 8.619 1.602 10.29-5.124 4.587-11.809 5.026-17.855 2.962Z"
            fill="#F9B8AF"
        />
        <Path
            d="M178.751 77.796a9.178 9.178 0 0 1-1.265 1.543 5.463 5.463 0 0 1-3.168 1.327c-.606.054-1.214.025-1.822.04a1.242 1.242 0 0 0-.685.16c-.602.418-.917 2.882-1.172 3.615a45.84 45.84 0 0 1-1.806 4.333 31.19 31.19 0 0 1-2.248 4.062 27.11 27.11 0 0 1-.641.915c-.73 1-1.548 1.932-2.444 2.786-.29.27-.57.542-.85.812-.771.74-1.52 1.457-2.305 2.129a17.232 17.232 0 0 1-3.464 2.353l-.15.076a16.414 16.414 0 0 1-5.373 1.603 13.206 13.206 0 0 1-3.53-.073c-2.392-.382-4.635-1.444-6.665-2.757a28.015 28.015 0 0 1-8.442-8.67 27.945 27.945 0 0 1-3.989-11.41c-2.861.679-6.027-.743-7.64-3.199-1.613-2.456-1.697-5.754-.473-8.42.543-1.16 1.358-2.267 2.553-2.746 1.327-.542 1.811.379 2.913.465 1.178.092 1.464-.999 2.544-1.736 1.393-.953 3.128-1.22 4.779-1.584a35.258 35.258 0 0 0 12.85-5.798 35.149 35.149 0 0 0 9.539-10.361c1.13 3.23 3.973 5.518 6.758 7.516a47.41 47.41 0 0 1 6.319 5.61c1.629 1.685 4.205 4.063 4.151 6.638a.597.597 0 0 0 .625.075c.199-.097.387-.215.562-.352a4.43 4.43 0 0 1 2.071-.617 2.928 2.928 0 0 1 1.553.16c.384.213.719.503.983.853 1.19 1.378 1.418 2.83 1.469 4.652.079 2.233-.247 4.172-1.537 6Z"
            fill="#FFD8C7"
        />
        <Path
            d="M154.948 45.094c.196.002.39.042.57.12-.025-.063-.049-.125-.076-.187a4.267 4.267 0 0 0-.09 1.936c.074.633.211 1.257.41 1.863a12.512 12.512 0 0 0 1.887 3.482c1.694 2.25 3.962 3.92 6.245 5.521.657.46 2.106 1.171 3.606 2.671 1.5 1.5 2.5 3 3 4s2.131 2.808 2.5 3c.013.01-2.5-4-3.5-5.5s-3.97-4.05-4.563-4.436c-1.108-.813-2.224-1.625-3.259-2.532-1.982-1.711-3.738-3.612-4.835-6.014a10.664 10.664 0 0 1-.907-2.916 8.623 8.623 0 0 0-.177-1.083.167.167 0 0 0-.201-.114 1.454 1.454 0 0 1-.61.032c-.098 0-.095.141 0 .15v.007Z"
            fill="#201C1D"
        />
        <Path
            d="M162.661 97.379c-.771.739-1.52 1.456-2.305 2.128-1.173.728-2.221 1.709-3.464 2.353l-.15.076a16.39 16.39 0 0 1-5.373 1.603c1.958-.924 2.693-1.322 3.551-2.166.383-.391.695-.845.924-1.341.602-1.12.358-4.449 2.682-3.233.406.24.773.542 1.086.894.25.306.59.525.972.625a1.71 1.71 0 0 0 1.035-.27c.36-.203.708-.426 1.042-.67Z"
            fill="#F2AAA0"
        />
        <Path
            d="M203.245 196.318a41.82 41.82 0 0 0-.958-6.615c-1.613-7.203-5.219-13.155-9.216-19.226a523.953 523.953 0 0 0-13.391-19.417c-2.172-3.006-5.083-5.583-7.412-8.5a106.964 106.964 0 0 1-6.867-9.628c-.76-1.2-1.502-2.437-1.947-3.775-1.023-3.103.125-5.399.896-8.413 1.103-4.303.581-8.895-.763-13.13a45.457 45.457 0 0 0-2.443-5.995c-.619-1.281-1.45-3.48-2.517-4.438-.573-.515-1.583-.628-2.067-.027-.301.376-.315.899-.287 1.378.052 1.001.205 1.995.458 2.965a41.491 41.491 0 0 0-7.952 3.415c-1.127.628-2.254 1.34-2.987 2.393-1.016 1.454-.299 2.437-.424 3.913-.095 1.102-1.357 1.936-1.105 3.106.177.812 1.252 1.253 1.214 2.071-.041.861-1.341 1.471-1.013 2.269.188.455.815.574 1.073.989.543.831-.72 1.735-.782 2.721-.041.596.369 1.116.755 1.573l3.149 3.715c1.458 1.725 3.071 3.25 4.589 4.928a8.388 8.388 0 0 1 2.34 4.249c.902 2.946 1.757 5.906 2.653 8.854 1.287 4.249 2.715 8.665 4.388 12.808a148.41 148.41 0 0 0 9.774 19.875c.337.566.736 1.118 1.029 1.706 3.723 6.063 8.146 11.264 12.49 16.81 3.153 4.021 7.386 9.206 13.079 7.294 3.544-1.188 4.478-4.045 4.244-7.868Zm-46.101-83.275a.759.759 0 0 1-.483-.146 50.803 50.803 0 0 1-4.86-3.149c-.367-.271-.766-.607-.788-1.062-.021-.455.408-.877.796-1.18 1.77-1.387 3.882-2.437 5.384-4.143.051.466.127.929.228 1.386.117.658.247 1.311.369 1.966.17.899.274 1.81.313 2.724.04.85.279 3.368-.959 3.604Z"
            fill="#FFD8C7"
        />
        <Circle cx={150.5} cy={23.5} r={17.5} fill="#201C1D" />
        <Circle cx={147} cy={23} r={16.85} stroke="#201C1D" strokeWidth={0.3} />
        <Circle cx={148} cy={23} r={16.5} stroke="#201C1D" />
        <Circle cx={153} cy={23} r={16.75} stroke="#201C1D" strokeWidth={0.5} />
        <Path
            d="M123 70c.4-.4 1.5.167 2 .5-.333.833-1.5 1.5-1 3.5s1.667 3 2.5 4c-.333.167-1.2.4-2 0-1-.5-3-2-3-4s1-3.5 1.5-4ZM177.5 70c-.4-.4-1.5.167-2 .5.333.833 1.5 1.5 1 3.5s-1.667 3-2.5 4c.333.167 1.2.4 2 0 1-.5 3-2 3-4s-1-3.5-1.5-4Z"
            fill="#F9B8AF"
        />
        <Path
            d="M45 97.813c18.122 0 32.813-14.691 32.813-32.813S63.121 32.187 45 32.187 12.187 46.879 12.187 65 26.879 97.813 45 97.813Z"
            fill="#D7E6F0"
        />
        <Path
            d="M45 91.25c14.498 0 26.25-11.752 26.25-26.25S59.498 38.75 45 38.75c-14.497 0-26.25 11.752-26.25 26.25S30.503 91.25 45 91.25Z"
            fill="#A5C3DC"
        />
        <Path
            d="M45 89.427c13.49 0 24.427-10.936 24.427-24.427 0-13.49-10.936-24.427-24.427-24.427-13.49 0-24.427 10.936-24.427 24.427 0 13.49 10.936 24.427 24.427 24.427Z"
            fill="#E1322D"
        />
        <Path
            d="M21.667 66.094c-.604 0-1.094-.49-1.094-1.094 0-13.47 10.958-24.427 24.427-24.427a1.094 1.094 0 0 1 0 2.187c-12.263 0-22.24 9.977-22.24 22.24 0 .604-.49 1.094-1.093 1.094Z"
            fill="#F04B37"
        />
        <Path
            d="M53.75 55.156v-4.375c0-1.208-.98-2.187-2.188-2.187h-4.374c-1.209 0-2.188.98-2.188 2.187v4.375c0 1.208.98 2.188 2.188 2.188h4.374c1.209 0 2.188-.98 2.188-2.188Z"
            fill="#F5826E"
        />
        <Path
            d="M49.375 55.156c0-1.208.98-2.187 2.188-2.187h2.187v2.187c0 1.208-.98 2.188-2.188 2.188h-2.187v-2.188Z"
            fill="#F04B37"
        />
        <Path
            d="M38.438 75.938v-4.376c0-1.208-.98-2.187-2.188-2.187h-4.375c-1.208 0-2.188.98-2.188 2.188v4.374c0 1.209.98 2.188 2.188 2.188h4.375c1.208 0 2.188-.98 2.188-2.188Z"
            fill="#F5826E"
        />
        <Path
            d="M34.063 75.938c0-1.209.979-2.188 2.187-2.188h2.188v2.188c0 1.207-.98 2.187-2.188 2.187h-2.188v-2.188Z"
            fill="#F04B37"
        />
        <Path
            d="m59.672 74.015 3.093-3.093a2.188 2.188 0 0 0 0-3.094l-3.093-3.093a2.187 2.187 0 0 0-3.094 0l-3.093 3.093a2.188 2.188 0 0 0 0 3.094l3.093 3.093c.854.855 2.24.855 3.094 0Z"
            fill="#F5826E"
        />
        <Path
            d="M56.578 70.922a2.188 2.188 0 0 1 3.094 0l1.547 1.547-1.547 1.547a2.188 2.188 0 0 1-3.094 0l-1.547-1.547 1.547-1.547ZM50.005 83.682l3.094-3.093a2.188 2.188 0 0 0 0-3.094l-3.094-3.093a2.188 2.188 0 0 0-3.094 0l-3.093 3.093a2.188 2.188 0 0 0 0 3.094l3.093 3.093c.855.854 2.24.854 3.094 0Z"
            fill="#F04B37"
        />
        <Path
            d="M46.911 80.589a2.188 2.188 0 0 1 3.094 0l1.547 1.546-1.547 1.547a2.187 2.187 0 0 1-3.094 0l-1.547-1.547 1.547-1.546ZM34.328 63.63l3.093-3.094a2.188 2.188 0 0 0 0-3.093l-3.093-3.093a2.187 2.187 0 0 0-3.094 0l-3.093 3.093a2.188 2.188 0 0 0 0 3.093l3.093 3.094c.855.854 2.24.854 3.094 0Z"
            fill="#F04B37"
        />
        <Path
            d="M31.234 60.536a2.188 2.188 0 0 1 3.094 0l1.547 1.547-1.547 1.547a2.188 2.188 0 0 1-3.094 0l-1.547-1.547 1.547-1.547Z"
            fill="#F04B37"
        />
        <Path
            d="M45 73.75a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5Z"
            fill="#9BD2F0"
        />
        <Path
            d="M45 73.75c-4.825 0-8.75-3.925-8.75-8.75s3.925-8.75 8.75-8.75a2.187 2.187 0 1 1 0 4.375A4.38 4.38 0 0 0 40.625 65 4.38 4.38 0 0 0 45 69.375a2.187 2.187 0 1 1 0 4.375Z"
            fill="#D7E6F0"
        />
        <Path
            d="M45 67.188a5.469 5.469 0 1 0 0-10.938 5.469 5.469 0 0 0 0 10.938Z"
            fill="#D7E6F0"
        />
        <Path
            d="M50.469 49.14h-3.055l1.254-1.253a.547.547 0 1 0-.773-.774l-2.028 2.028H43.04l1.254-1.254a.547.547 0 1 0-.773-.774l-2.028 2.028h-.867a.547.547 0 0 0 0 1.093h.867l2.028 2.028a.545.545 0 0 0 .773 0 .547.547 0 0 0 0-.774l-1.254-1.254h2.828l2.028 2.028a.545.545 0 0 0 .773 0 .546.546 0 0 0 0-.774l-1.254-1.254h3.055a.547.547 0 0 0 0-1.093ZM49.375 80.13h-.867l-2.028-2.027a.547.547 0 1 0-.773.773l1.254 1.254h-2.828l-2.028-2.027a.547.547 0 1 0-.773.773l1.254 1.254h-3.055a.547.547 0 0 0 0 1.094h3.055l-1.254 1.254a.547.547 0 1 0 .773.773l2.028-2.027h2.828l-1.254 1.254a.547.547 0 1 0 .773.773l2.028-2.027h.867a.547.547 0 0 0 0-1.094ZM35.645 55.545a.546.546 0 0 0-.67-.386l-1.713.459 1.527-2.646a.547.547 0 1 0-.947-.547l-1.528 2.646-.459-1.713a.546.546 0 1 0-1.056.283l.742 2.77-1.414 2.449-.46-1.713a.546.546 0 1 0-1.056.283l.742 2.77-.433.75a.547.547 0 1 0 .947.547l.434-.75 2.77-.743a.547.547 0 0 0-.284-1.056l-1.713.459 1.414-2.45 2.77-.742a.547.547 0 0 0 .386-.67ZM61.388 72.935l-.742-2.77.434-.75a.547.547 0 0 0-.947-.548l-.434.751-2.77.743a.547.547 0 1 0 .284 1.056l1.713-.459-1.414 2.45-2.77.741a.547.547 0 0 0 .283 1.057l1.713-.46-1.527 2.646a.547.547 0 0 0 .947.547l1.527-2.645.46 1.713a.547.547 0 0 0 1.056-.284l-.742-2.769 1.414-2.45.459 1.714a.547.547 0 1 0 1.056-.283ZM34.164 72.255a.546.546 0 0 0-.67.386l-.459 1.713-1.414-2.449.742-2.77a.547.547 0 1 0-1.056-.282l-.46 1.713-1.527-2.646a.547.547 0 1 0-.947.547l1.527 2.645-1.712-.458a.546.546 0 1 0-.284 1.056l2.77.742 1.414 2.45-1.713-.46a.546.546 0 1 0-.283 1.057l2.77.742.433.75a.547.547 0 1 0 .947-.546l-.433-.751.742-2.77a.547.547 0 0 0-.387-.67ZM62.096 58.655l-2.77-.743-1.414-2.449 1.713.459a.546.546 0 1 0 .283-1.056l-2.77-.742-.433-.751a.547.547 0 1 0-.947.547l.433.75-.742 2.77a.547.547 0 1 0 1.057.283l.459-1.713 1.414 2.45-.742 2.769a.547.547 0 1 0 1.056.283l.46-1.713 1.526 2.645a.547.547 0 1 0 .948-.546l-1.528-2.646 1.713.459a.547.547 0 0 0 .284-1.056Z"
            fill="#5FAA46"
        />
        <Path
            d="m275.921 191.704 12.375 12.375 1.546-1.547a6.562 6.562 0 0 0 0-9.281l-3.093-3.093a6.562 6.562 0 0 0-9.281 0l-1.547 1.546Zm11.469 8.375-7.469-7.469a1.093 1.093 0 0 1 .296-1.758 4.377 4.377 0 0 1 4.985.852l3.093 3.094a4.376 4.376 0 0 1 .853 4.985 1.093 1.093 0 0 1-1.758.296ZM235.705 231.921l12.374 12.375-1.547 1.546a6.562 6.562 0 0 1-9.281 0l-3.093-3.093a6.562 6.562 0 0 1 0-9.281l1.547-1.547Zm8.374 11.469-7.469-7.469a1.093 1.093 0 0 0-1.758.296 4.376 4.376 0 0 0 .853 4.985l3.093 3.093a4.376 4.376 0 0 0 4.985.853 1.093 1.093 0 0 0 .296-1.758Z"
            fill="#8CAAC8"
        />
        <Path
            d="M262 248.625c16.914 0 30.625-13.711 30.625-30.625S278.914 187.375 262 187.375 231.375 201.086 231.375 218s13.711 30.625 30.625 30.625Z"
            fill="#A5C3DC"
        />
        <Path
            d="M232.469 219.094c-.604 0-1.094-.49-1.094-1.094 0-8.18 3.186-15.871 8.97-21.655 5.784-5.784 13.475-8.97 21.655-8.97a1.094 1.094 0 0 1 0 2.187c-15.68 0-28.438 12.758-28.438 28.438 0 .604-.489 1.094-1.093 1.094Z"
            fill="#D7E6F0"
        />
        <Path
            d="M262 244.25c14.497 0 26.25-11.753 26.25-26.25s-11.753-26.25-26.25-26.25-26.25 11.753-26.25 26.25 11.753 26.25 26.25 26.25Z"
            fill="#8C3C14"
        />
        <Path
            d="M236.844 219.094c-.604 0-1.094-.49-1.094-1.094 0-14.474 11.776-26.25 26.25-26.25a1.094 1.094 0 0 1 0 2.188c-13.268 0-24.062 10.794-24.062 24.062 0 .604-.49 1.094-1.094 1.094Z"
            fill="#D26E28"
        />
        <Path
            d="M266.375 209.615v-4.375a2.187 2.187 0 0 0-2.187-2.188h-4.376a2.187 2.187 0 0 0-2.187 2.188v4.375c0 1.208.979 2.187 2.187 2.187h4.376a2.187 2.187 0 0 0 2.187-2.187Z"
            fill="#F28A39"
        />
        <Path
            d="M262 209.615c0-1.208.979-2.188 2.188-2.188h2.187v2.188a2.187 2.187 0 0 1-2.187 2.187H262v-2.187Z"
            fill="#D26E28"
        />
        <Path
            d="M254.344 223.469v-4.375c0-1.208-.98-2.188-2.188-2.188h-4.375c-1.208 0-2.187.98-2.187 2.188v4.375c0 1.208.979 2.187 2.187 2.187h4.375a2.188 2.188 0 0 0 2.188-2.187Z"
            fill="#F28A39"
        />
        <Path
            d="M249.969 223.469c0-1.208.979-2.188 2.187-2.188h2.188v2.188c0 1.208-.98 2.187-2.188 2.187h-2.187v-2.187Z"
            fill="#D26E28"
        />
        <Path
            d="M277.312 230.031v-4.375a2.187 2.187 0 0 0-2.187-2.187h-4.375a2.188 2.188 0 0 0-2.188 2.187v4.375c0 1.208.98 2.188 2.188 2.188h4.375c1.208 0 2.187-.98 2.187-2.188Z"
            fill="#F28A39"
        />
        <Path
            d="M272.938 230.031c0-1.208.979-2.187 2.187-2.187h2.187v2.187a2.188 2.188 0 0 1-2.187 2.188h-2.187v-2.188ZM260.078 237.401l3.093-3.094a2.185 2.185 0 0 0 0-3.093l-3.093-3.094a2.188 2.188 0 0 0-3.094 0l-3.093 3.094a2.187 2.187 0 0 0 0 3.093l3.093 3.094c.855.854 2.24.854 3.094 0ZM276.859 217.724l3.094-3.094a2.187 2.187 0 0 0 0-3.093l-3.094-3.094a2.187 2.187 0 0 0-3.093 0l-3.094 3.094a2.187 2.187 0 0 0 0 3.093l3.094 3.094a2.187 2.187 0 0 0 3.093 0Z"
            fill="#D26E28"
        />
        <Path
            d="M256.984 234.307a2.188 2.188 0 0 1 3.094 0l1.547 1.547-1.547 1.547a2.188 2.188 0 0 1-3.094 0l-1.546-1.547 1.546-1.547Z"
            fill="#D26E28"
        />
        <Path
            d="M251.969 206.157c1.708 1.708-4.479 7.895-6.188 6.187a4.376 4.376 0 0 1 6.188-6.187Z"
            fill="#FAA019"
        />
        <Path
            d="M245.594 210.344c-.604 0-1.093-.49-1.093-1.094a4.38 4.38 0 0 1 4.375-4.375 1.093 1.093 0 0 1 0 2.187 2.19 2.19 0 0 0-2.188 2.188c0 .604-.49 1.094-1.094 1.094Z"
            fill="#FFD205"
        />
        <Path
            d="M266.375 220.187c0 2.417-8.75 2.417-8.75 0a4.375 4.375 0 0 1 8.75 0Z"
            fill="#FAA019"
        />
        <Path
            d="M258.719 221.281a1.093 1.093 0 0 1-1.094-1.093 4.38 4.38 0 0 1 4.375-4.376 1.094 1.094 0 0 1 0 2.188 2.19 2.19 0 0 0-2.188 2.188c0 .604-.489 1.093-1.093 1.093Z"
            fill="#FFD205"
        />
        <Path
            d="M272.937 206.698a4.375 4.375 0 0 1 0-8.75c2.417 0 2.417 8.75 0 8.75Z"
            fill="#FAA019"
        />
        <Path
            d="M269.656 203.417c-.604 0-1.094-.49-1.094-1.094a4.38 4.38 0 0 1 4.376-4.375 1.093 1.093 0 0 1 0 2.187 2.19 2.19 0 0 0-2.188 2.188c0 .604-.49 1.094-1.094 1.094Z"
            fill="#FFD205"
        />
        <Path
            d="M274.76 233.677a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM246.323 207.062a1.093 1.093 0 1 0 .001-2.187 1.093 1.093 0 0 0-.001 2.187ZM267.104 223.104a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM282.417 211.802a1.093 1.093 0 1 0 0-2.187 1.093 1.093 0 0 0 0 2.187ZM252.156 236.958a1.093 1.093 0 1 0 .001-2.187 1.093 1.093 0 0 0-.001 2.187ZM252.521 212.167a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM269.292 199.406a1.093 1.093 0 1 0 0-2.186 1.093 1.093 0 0 0 0 2.186ZM242.312 227.479a1.094 1.094 0 1 0 0-2.187 1.094 1.094 0 0 0 0 2.187Z"
            fill="#F04B37"
        />
        <Path
            d="M249.604 234.771a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM278.042 208.156a1.093 1.093 0 1 0 0-2.186 1.093 1.093 0 0 0 0 2.186ZM257.26 224.198a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM241.948 212.896a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM268.562 235.135a1.093 1.093 0 1 0 .002-2.186 1.093 1.093 0 0 0-.002 2.186ZM271.844 213.26a1.093 1.093 0 1 0 .001-2.187 1.093 1.093 0 0 0-.001 2.187ZM256.896 201.594a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM282.052 228.573a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM278.953 229.484a1.093 1.093 0 1 0 .001-2.187 1.093 1.093 0 0 0-.001 2.187Z"
            fill="#5FAA46"
        />
        <Path
            d="M252.339 201.047a1.093 1.093 0 1 0 0-2.187 1.093 1.093 0 0 0 0 2.187Z"
            fill="#F04B37"
        />
        <Path
            d="M268.38 221.828a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM257.078 237.141a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM280.047 205.422a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM257.443 207.245a1.093 1.093 0 1 0 0-2.187 1.093 1.093 0 0 0 0 2.187ZM244.682 224.016a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM272.755 197.037a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189Z"
            fill="#5FAA46"
        />
        <Path
            d="M277.677 204.146a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM252.703 233.495a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM268.745 212.713a1.093 1.093 0 1 0 .001-2.187 1.093 1.093 0 0 0-.001 2.187ZM257.443 197.401a1.093 1.093 0 1 0 0-2.187 1.093 1.093 0 0 0 0 2.187ZM279.865 225.656a1.093 1.093 0 1 0 0-2.186 1.093 1.093 0 0 0 0 2.186ZM257.807 227.297a1.094 1.094 0 1 0 0-2.189 1.094 1.094 0 0 0 0 2.189ZM245.229 215.812a1.093 1.093 0 1 0 .001-2.187 1.093 1.093 0 0 0-.001 2.187ZM273.12 237.505a1.094 1.094 0 1 0 0-2.187 1.094 1.094 0 0 0 0 2.187Z"
            fill="#F04B37"
        />
        <Path
            d="m252.256 21.318 4.418 4.419-11.046 11.047-4.419-4.42 11.047-11.046Z"
            fill="#A5C3DC"
        />
        <Path
            d="m243.42 34.58-2.21-2.21 8.839-8.838 1.105 1.105c.61.61.61 1.6 0 2.21l-7.734 7.733Z"
            fill="#D7E6F0"
        />
        <Path
            d="m251.047 34.885.001-.013a3.88 3.88 0 0 1 1.104-2.395l.106-.106c.611-.61.611-1.6 0-2.21l-4.419-4.42a1.563 1.563 0 0 0-2.21 0l-.107.108a3.863 3.863 0 0 1-2.418 1.105c-5.008.474-14.365 2.518-22.719 10.774-5.603 5.539-5.695 14.632-.071 20.15 5.499 5.396 14.331 5.364 19.791-.096 8.402-8.401 10.467-17.859 10.942-22.897Z"
            fill="#D26E28"
        />
        <Path
            d="M221.952 56.983a.779.779 0 0 1-.547-.224c-2.38-2.337-3.693-5.478-3.695-8.844a12.704 12.704 0 0 1 3.823-9.124.781.781 0 1 1 1.096 1.113 11.151 11.151 0 0 0-3.357 8.01c.003 2.943 1.149 5.689 3.227 7.73a.78.78 0 0 1-.547 1.339Z"
            fill="#F28A39"
        />
        <Path
            d="M257.23 27.21a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
            fill="#A5C3DC"
        />
        <Path
            d="M253.916 23.895a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
            fill="#D7E6F0"
        />
        <Path
            d="m251.047 34.885.001-.013a3.88 3.88 0 0 1 1.104-2.395l.106-.106c.611-.61.611-1.6 0-2.21l-2.209-2.21-19.89 19.89a6.507 6.507 0 0 0 0 9.202l.741.742c2.523 2.522 6.62 2.557 9.155.047l.05-.05c8.402-8.401 10.467-17.859 10.942-22.897ZM239.391 30.667a.39.39 0 1 0-.001-.781.39.39 0 0 0 .001.78ZM239.391 36.136a.39.39 0 1 0-.001-.782.39.39 0 0 0 .001.782ZM237.828 32.23a.39.39 0 1 0 0-.782.39.39 0 0 0 0 .781ZM240.953 32.23a.39.39 0 1 0 0-.782.39.39 0 0 0 0 .781ZM230.146 44.599a.39.39 0 1 0 0-.78.39.39 0 0 0 0 .78ZM224.677 44.599a.39.39 0 1 0 0-.782.39.39 0 0 0 0 .782ZM228.583 43.036a.39.39 0 1 0 0-.781.39.39 0 0 0 0 .781ZM228.583 46.161a.39.39 0 1 0 0-.781.39.39 0 0 0 0 .781Z"
            fill="#A55023"
        />
        <Path
            d="M236.917 49.026a.39.39 0 1 0-.001-.78.39.39 0 0 0 .001.78ZM242.385 49.026a.39.39 0 1 0 0-.781.39.39 0 0 0 0 .781ZM238.479 50.589a.39.39 0 1 0 0-.782.39.39 0 0 0 0 .782ZM238.479 47.464a.39.39 0 1 0 0-.782.39.39 0 0 0 0 .782Z"
            fill="#8C3C14"
        />
        <G clipPath="url(#a)">
            <Path
                d="m38.867 181.036-2.421-1.976 5.319-6.52a1.563 1.563 0 0 1 1.678-.503l5.218 1.636c.412.129.64.568.512.979l-.468 1.491a.781.781 0 0 1-.979.512l-4.209-1.32-4.65 5.701Z"
                fill="#5FAA46"
            />
            <Path
                d="m41.105 179.492-5.963-1.87a9.375 9.375 0 0 0-11.75 6.141l23.855 7.479a9.375 9.375 0 0 0-6.142-11.75Z"
                fill="#5AD7FF"
            />
            <Path
                d="M25.394 185.21a.781.781 0 0 1-.511-.979c1.288-4.111 5.68-6.407 9.791-5.118a.781.781 0 0 1-.467 1.491 6.257 6.257 0 0 0-7.834 4.094.781.781 0 0 1-.979.512Z"
                fill="#A5FFFF"
            />
            <Path
                d="m46.312 194.224-23.855-7.479a1.562 1.562 0 1 1 .934-2.982l23.856 7.479a1.562 1.562 0 1 1-.935 2.982Z"
                fill="#23AAE6"
            />
            <Path
                d="m34.384 190.485-11.927-3.74a1.562 1.562 0 1 1 .934-2.982l11.928 3.74a1.562 1.562 0 1 1-.935 2.982Z"
                fill="#5AD7FF"
            />
            <Path
                d="m22.457 186.745-4.687 24.902a1.563 1.563 0 0 0 1.065 1.8l15.206 4.767a1.562 1.562 0 0 0 1.902-.87l10.369-23.12-23.855-7.479Z"
                fill="#F0915A"
            />
            <Path
                d="m32.426 191.508-10.28-3.223-4.343 23.201 9.102 2.854 6.544-20.874c.259-.823-.2-1.7-1.023-1.958Z"
                fill="#FAB991"
            />
            <Path
                d="M21.365 208.509a2.344 2.344 0 1 0 1.402-4.473 2.344 2.344 0 0 0-1.402 4.473Z"
                fill="#F0915A"
            />
            <Path
                d="M22.533 204.782a2.344 2.344 0 1 0 1.401-4.475 2.344 2.344 0 0 0-1.4 4.475Z"
                fill="#F0915A"
            />
            <Path
                d="M27.006 206.184a2.344 2.344 0 1 0 1.402-4.473 2.344 2.344 0 0 0-1.402 4.473Z"
                fill="#F0915A"
            />
            <Path
                d="M34.783 212.716a2.344 2.344 0 1 0 1.402-4.473 2.344 2.344 0 0 0-1.402 4.473Z"
                fill="#D2643C"
            />
            <Path
                d="M35.952 208.988a2.343 2.343 0 1 0 1.403-4.471 2.343 2.343 0 0 0-1.403 4.471Z"
                fill="#D2643C"
            />
            <Path
                d="M31.48 207.586a2.344 2.344 0 1 0 1.401-4.473 2.344 2.344 0 0 0-1.402 4.473Z"
                fill="#D2643C"
            />
            <Path
                d="M43.153 183.409a6.25 6.25 0 0 1 4.094 7.833l-11.928-3.739a6.25 6.25 0 0 1 7.834-4.094Z"
                fill="#23AAE6"
            />
            <Path
                d="M24.67 213.639a2.344 2.344 0 1 0 1.4-4.475 2.344 2.344 0 0 0-1.4 4.475Z"
                fill="#555A6E"
            />
            <Path
                d="M26.071 209.166a2.343 2.343 0 0 0-2.937 1.535l.745.234c.824.258 1.7-.2 1.959-1.024l.233-.745Z"
                fill="#6E788C"
            />
            <Path
                d="M23.601 209.21a2.344 2.344 0 1 0 1.403-4.473 2.344 2.344 0 0 0-1.403 4.473Z"
                fill="#555A6E"
            />
            <Path
                d="M25.003 204.737a2.344 2.344 0 0 0-2.937 1.536l.745.233c.824.258 1.7-.2 1.959-1.023l.233-.746Z"
                fill="#6E788C"
            />
            <Path
                d="M28.074 210.612a2.343 2.343 0 1 0 1.403-4.471 2.343 2.343 0 0 0-1.403 4.471Z"
                fill="#555A6E"
            />
            <Path
                d="M29.476 206.139a2.344 2.344 0 0 0-2.937 1.536l.745.233c.824.259 1.7-.2 1.959-1.023l.233-.746Z"
                fill="#6E788C"
            />
            <Path
                d="m28.074 210.612 1.402-4.473a2.345 2.345 0 0 1-1.402 4.473Z"
                fill="#463C4B"
            />
            <Path
                d="M20.196 212.236a2.343 2.343 0 1 0 1.404-4.471 2.343 2.343 0 0 0-1.404 4.471Z"
                fill="#555A6E"
            />
            <Path
                d="M21.599 207.763a2.344 2.344 0 0 0-2.938 1.536l.745.233c.824.259 1.7-.2 1.959-1.023l.234-.746Z"
                fill="#6E788C"
            />
            <Path
                d="M29.142 215.041a2.344 2.344 0 1 0 1.402-4.473 2.344 2.344 0 0 0-1.402 4.473Z"
                fill="#463C4B"
            />
            <Path
                d="M30.544 210.568a2.344 2.344 0 0 0-2.937 1.535l.745.234c.824.258 1.7-.2 1.959-1.024l.233-.745Z"
                fill="#555A6E"
            />
            <Path
                d="M33.615 216.443a2.344 2.344 0 1 0 1.402-4.473 2.344 2.344 0 0 0-1.402 4.473Z"
                fill="#463C4B"
            />
            <Path
                d="M35.017 211.97a2.344 2.344 0 0 0-2.938 1.536l.746.233c.823.258 1.7-.2 1.958-1.023l.234-.746Z"
                fill="#555A6E"
            />
            <Path
                d="M32.547 212.015a2.344 2.344 0 1 0 1.4-4.475 2.344 2.344 0 0 0-1.4 4.475Z"
                fill="#463C4B"
            />
            <Path
                d="M33.95 207.542a2.344 2.344 0 0 0-2.938 1.535l.745.234c.824.258 1.7-.2 1.958-1.024l.234-.745Z"
                fill="#555A6E"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path
                    fill="#fff"
                    transform="rotate(17.407 -521.031 136.832)"
                    d="M0 0h50v50H0z"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export default ImageSvgTwo;
