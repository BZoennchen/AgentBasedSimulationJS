class NavigationField {
    constructor(width, height, resolution){
        this.width = width;
        this.height = height;
        this.resolution = resolution;
        this.cells = new Array(width / resolution, height / resolution);
    }

    get distance(x,y) {
        //return this.distanceAt(x / this.resolution, y / this.resolution).value();
    }

    get distanceAt(col, row) {
        return this.cellAt(col, row).value();
    }

    get typeAt(col, row) {
        return this.cellAt(col, row).type();
    }

    get cellAt(col, row) {
        return this.distance[col][row];
    }

    isInside(x,y) {
        return Math.floor(x / this.resolution) >= 0 
            && Math.floor(y / this.resolution) 
            && Math.ceil(x / this.resolution) < this.width 
            && Math.ceil(y / this.resolution) < this.height;
    }

    static Entry = class {
        constructor(col, row, value, type) {
            const GeometryType = {FREE: "free", OCCUPIED: "occupied"};
            this.col = col;
            this.row = row;
            this.value = value;
            this.type = type;
        }

        get value() {
            return this.value;
        }

        get col() {
            return this.col;
        }

        get row() {
            return this.row;
        }

        get type() {
            return this.type;
        }

    }
}