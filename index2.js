const me = {
    name: 'Vladimir',
    surname: 'Shumarev',
    dob: '01/03/1996',
    reasonTolearnJs: 'I want to change my life',
    dream: 'dream of a miracle',
    logName() {
        console.log('Вывод в консоль имени: ', this.name);
    },
    logSurname() {
        console.log('Вывод в консоль Фамилии: ', this.surname);
    },
    logDob() {
        console.log(' Вывод в консоль Даты рождения: ', this.dob);
    },
    logReasonTolearnJs() {
        console.log(me.name, ' хочет выучить JS потому что', this.reasonTolearnJs);
    },
    logDream() {
        console.log(me.name, 'мечтает о', me.dream);
    },
    logFullinformation() {
        this.logName();
        this.logSurname();
        this.logDob();
        this.logReasonTolearnJs();
        this.logDream();
    }
}

me.logFullinformation();
