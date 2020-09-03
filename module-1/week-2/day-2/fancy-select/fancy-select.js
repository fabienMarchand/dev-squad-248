class FancySelect {
    constructor(parentElement){
        this.isActive = false;
        this.parentElement = parentElement;
        this.createMarkup();
        this.cursor = parentElement.querySelector('.cursor');
        //this.cursor.onclick = this.changeStatus.bind(this);
        this.cursor.onclick = this.changeStatus;
    }

    createMarkup() {
        this.parentElement.innerHtml = '<span class="cursor"></span>';
    }

    // changeStatus(evt) {
    //     this.isActive = !this.isActive;
    //     this.cursor.classList.toggle("s-active");
    // }

    changeStatus = () => {
        this.isActive = !this.isActive;
        this.cursor.classList.toggle("is-active");
    }
}

document
    .querySelectorAll(".fancy-select")
    .forEach((element) => new FancySelect(element));