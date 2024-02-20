
const searchResults = [
    {
        title: "The Lost City of Atlantis",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita inventore aspernatur consectetur sint nisi quaerat at placeat, perferendis labore perspiciatis mollitia voluptatum cupiditate magni voluptates. Odit corporis vitae error!",
        sourceName: "Explorers' Journal",
        sourceLogo: "../assets/icons (1).jpg",
        sourceLink: "https://example.com/lost-city-atlantis"
    },
    {
        title: "The Time Traveler's Dilemma",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita inventore aspernatur consectetur sint nisi quaerat at placeat, perferendis labore perspiciatis mollitia voluptatum cupiditate magni voluptates. Odit corporis vitae error!Unravel the mysteries of time travel in this mind-bending adventure.",
        sourceName: "Temporal Gazette",
        sourceLogo: "../assets/icons (1).png",
        sourceLink: "https://example.com/time-travelers-dilemma"
    },
    {
        title: "The Lost City of Atlantis",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita inventore aspernatur consectetur sint nisi quaerat at placeat, perferendis labore perspiciatis mollitia voluptatum cupiditate magni voluptates. Odit corporis vitae error!",
        sourceName: "Explorers' Journal",
        sourceLogo: "../assets/icons (2).jpg",
        sourceLink: "https://example.com/lost-city-atlantis"
    },
    {
        title: "The Time Traveler's Dilemma",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita inventore aspernatur consectetur sint nisi quaerat at placeat, perferendis labore perspiciatis mollitia voluptatum cupiditate magni voluptates. Odit corporis vitae error!Unravel the mysteries of time travel in this mind-bending adventure.",
        sourceName: "Temporal Gazette",
        sourceLogo: "../assets/icons (3).jpg",
        sourceLink: "https://example.com/time-travelers-dilemma"
    },
    {
        title: "The Lost City of Atlantis",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita inventore aspernatur consectetur sint nisi quaerat at placeat, perferendis labore perspiciatis mollitia voluptatum cupiditate magni voluptates. Odit corporis vitae error!",
        sourceName: "Explorers' Journal",
        sourceLogo: "../assets/icons (3).png",
        sourceLink: "https://example.com/lost-city-atlantis"
    },
    {
        title: "The Time Traveler's Dilemma",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita inventore aspernatur consectetur sint nisi quaerat at placeat, perferendis labore perspiciatis mollitia voluptatum cupiditate magni voluptates. Odit corporis vitae error!Unravel the mysteries of time travel in this mind-bending adventure.",
        sourceName: "Temporal Gazette",
        sourceLogo: "../assets/icons (4).png",
        sourceLink: "https://example.com/time-travelers-dilemma"
    },
    {
        title: "The Lost City of Atlantis",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita inventore aspernatur consectetur sint nisi quaerat at placeat, perferendis labore perspiciatis mollitia voluptatum cupiditate magni voluptates. Odit corporis vitae error!",
        sourceName: "Explorers' Journal",
        sourceLogo: "../assets/icons (5).png",
        sourceLink: "https://example.com/lost-city-atlantis"
    },
    {
        title: "The Time Traveler's Dilemma",
        summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita inventore aspernatur consectetur sint nisi quaerat at placeat, perferendis labore perspiciatis mollitia voluptatum cupiditate magni voluptates. Odit corporis vitae error!Unravel the mysteries of time travel in this mind-bending adventure.",
        sourceName: "Temporal Gazette",
        sourceLogo: "../assets/icons (4).jpg",
        sourceLink: "https://example.com/time-travelers-dilemma"
    },
    // Add more search result objects here...
];

function renderSearchResults() {
    const container = document.getElementById("searchResults");

    searchResults.forEach((result, index) => {
        const cardClass = index === 0 ? "bg-white opacity-100" : "bg-white opacity-50";

        const card = `
        <div class="flex flex-col my-3 px-1 pr-4 gap-2 rounded-lg">

        <div class="flex flex-row items-center gap-3">
            <div class="p-2  w-[50px] h-[50px] rounded-full ">
                <img src="${result.sourceLogo}" class=" rounded-full" alt="icons">
            </div>

            <div class="flex flex-col justify-center gap-y-1">
                <p class=" capitalize font-medium text-lg dark:text-[#fcfcfc] text-gray-800">${result.sourceName}</p>
                <a href="#" class="text-gray-400 block text-xs">${result.sourceLink}</a>

            </div>

            <div class=" hidden py-2 px-4"><i class="fas fa-ellipsis mr-2 text-sm font-light text-gray-500"></i></div>
        </div>

        <div>
            <h2 class="font-medium text-left my-3  text-blue-500 text-xl sm:text-[1em] text-[.9em] capitalize">${result.title}</h2>
            <p class=" text-gray-600 dark:text-[#bbb] overflow-ellipsis line-clamp-3 text-sm">${result.summary}</p>
        </div>
    </div>
        `;

        container.insertAdjacentHTML("beforeend", card);
    });
}

renderSearchResults();


