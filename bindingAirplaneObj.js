const Airplane = {
    name: "",
    isFlying: false,
    setName(name) {
        this.name = name;
    },
    takeOff() {
        if (!this.isFlying) {
            this.isFlying = true;
        }
    },
    land() {
        if (this.isFlying) {
            this.isFlying = false;
        }
    }
}

Airplane.setName('Airbus A310');
Airplane.takeOff();
Airplane.land();
