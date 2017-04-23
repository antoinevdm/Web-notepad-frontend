"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var categoriesComponent = (function () {
    function categoriesComponent() {
        this.display = false;
        this.selectedCat = 0;
        this.catToModidy = null;
        this.emptyCat = [{
                "id": 0,
                "name": ""
            }];
        this.categories = [{
                "id": 1,
                "name": "remarque"
            }, {
                "id": 2,
                "name": "todo"
            }, {
                "id": 3,
                "name": "nePasOublier"
            }, {
                "id": 4,
                "name": "autre"
            }];
    }
    categoriesComponent.prototype.deleteCat = function (cat) {
        // TODO: delete category in databe using API
    };
    categoriesComponent.prototype.modifyCat = function (cat) {
        if (this.display == true && this.selectedCat == cat.id) {
            this.display = false;
        }
        else if (this.display == true && this.selectedCat != cat.id) {
            this.selectedCat = cat.id;
            this.catToModify = cat;
        }
        else {
            this.display = !this.display;
            this.selectedCat = cat.id;
            this.catToModify = cat;
        }
    };
    categoriesComponent = __decorate([
        core_1.Component({
            selector: 'categories',
            templateUrl: 'app/templates/categories.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], categoriesComponent);
    return categoriesComponent;
}());
exports.categoriesComponent = categoriesComponent;
//# sourceMappingURL=categories.component.js.map