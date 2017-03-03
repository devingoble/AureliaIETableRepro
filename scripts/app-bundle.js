define('person',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Person = (function () {
        function Person() {
        }
        return Person;
    }());
    exports.Person = Person;
});

define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.isCompact = true;
            this.personnel = [
                { firstName: "Jimmy", lastName: "Buffett", favoriteColor: "Cheeseburger" },
                { firstName: "Han", lastName: "Solo", favoriteColor: "none, he's dead" }
            ];
        }
        return App;
    }());
    exports.App = App;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('custom-row',["require", "exports", "aurelia-framework", "./person"], function (require, exports, aurelia_framework_1, person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomRow = (function () {
        function CustomRow() {
        }
        return CustomRow;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", person_1.Person)
    ], CustomRow.prototype, "person", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], CustomRow.prototype, "isCompact", void 0);
    exports.CustomRow = CustomRow;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=custom-row></require>Is Compact: <input type=checkbox checked.bind=isCompact><table><tbody><tr as-element=custom-row repeat.for=\"person of personnel\" person.bind=person is-compact.bind=isCompact></tr></tbody></table></template>"; });
define('text!custom-row.html', ['module'], function(module) { module.exports = "<template><td if.bind=isCompact>${person.firstName}</td><td>${person.lastName}</td><td if.bind=!isCompact>${person.favoriteColor}</td></template>"; });
//# sourceMappingURL=app-bundle.js.map