class Backpack {
    constructor(
        name,
        author,
        pages,
        established,
        about,
        newCurrentPage
    ) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.established = established;
        this.about = about;
        this.newCurrentPage = newCurrentPage
    }
    updateCurrentPage(newCurrentPage) {
        this.currentPage = newCurrentPage;
    }
}

export default Backpack;