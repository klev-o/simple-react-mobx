import { decorate, computed, observable, action } from 'mobx';

class Store {
    tasks = [
        { id: 0, title: 'Сходить в магазин', done: false },
        { id: 1, title: 'Вынести мусор', done: true },
        { id: 2, title: 'Заработать 1 000 000 $', done: false },
        { id: 3, title: 'Бегать с дошираком', done: false },
        { id: 4, title: 'Афигевать', done: true },
    ];


    sortByDone = (a, b) => {
        return a.done ? 1 : -1;
    };

    sortByTitle = (a, b) => {
        if (a.done === b.done) {
            return a.title > b.title ? 1 : -1;
        }
        return 0;
    }

    get sortedTasks() {
        return this.tasks.slice().sort(this.sortByDone).sort(this.sortByTitle);
    }

    get activeTasksCount() {
        return this.tasks.filter(item => item.done).length;
    }
}

Store = decorate(Store, {
    tasks: observable,
    sortedTasks: computed,
    activeTasksCount: computed
});

export default new Store();