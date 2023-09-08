const Pagination = {
    init(arr, itemsOnEachPage) {
        this.arr = arr;
        this.itemsOnEachPage = itemsOnEachPage;
        this.currentPage = 1;
        this.lastPage = Math.ceil(this.arr.length / this.itemsOnEachPage);
    },
    getPageItems() {
        const startIndex = (this.currentPage - 1) * this.itemsOnEachPage;
        const endIndex = startIndex + this.itemsOnEachPage;

        return this.arr.slice(startIndex, endIndex);
    },
    prevPage() {
        if(this.currentPage > 1) {
            this.currentPage--
        }

        return this;
    },
    nextPage() {
        if(this.currentPage < this.lastPage) {
            this.currentPage++
        }

        return this;
    },
    firstPage() {
        this.currentPage = 1;

        return this;
    },
    lastPage() {
        this.currentPage = this.lastPage;

        return this;
    },
    goToPage(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= this.lastPage) {
            this.currentPage = pageNumber;
        }

        return this;
    },
};

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

Pagination.init(alphabetArray, 4);

Pagination.getPageItems();
Pagination.nextPage();
Pagination.getPageItems();
Pagination.nextPage().nextPage();
Pagination.goToPage(3);
