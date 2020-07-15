import { decorate, computed, observable, action } from 'mobx';

class Store {
    tasks = [
        { id: 0, title: 'Сходить в магазин', done: false },
        { id: 1, title: 'Вынести мусор', done: true },
        { id: 2, title: 'Заработать 1 000 000 $', done: false },
        { id: 2, title: 'Съесть доширак', done: false },
    ];

    get sortedTasks() {
        return this.tasks.slice().sort((a, b) => {
            let result;
            if (a.done === b.done) {
                result = 0;
            } else if (a.done) {
                result = 1
            } else {
                result = -1
            }
            return result;
        });
    }

    get activeTasksCount() {
        return this.tasks.filter(item => !item.done).length;
    }
}

Store = decorate(Store, {
    tasks: observable,
    sortedTasks: computed,
    activeTasksCount: computed
});

export default new Store();