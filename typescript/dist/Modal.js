var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Crawler } from './Finder.js';
import { ModalState } from './Model.js';
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(modalContainer, _modalElements) {
        var _this = _super.call(this) || this;
        _this.modalContainer = modalContainer;
        _this._modalElements = _modalElements;
        _this.render();
        return _this;
    }
    Object.defineProperty(Modal.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        enumerable: false,
        configurable: true
    });
    Modal.prototype.open = function () {
        this._isVisible = ModalState.Visible;
        this.modalContainer.classList.remove('hidden');
    };
    Modal.prototype.hide = function () {
        this._isVisible = ModalState.Unvisible;
        this.modalContainer.classList.add('hidden');
    };
    Modal.prototype.create = function (type, description, cssClasses) {
        if (description === void 0) { description = ''; }
        var element = document.createElement(type);
        element.textContent = description;
        if (cssClasses) {
            cssClasses.forEach(function (classes) {
                element.classList.add(classes);
            });
        }
        return element;
    };
    Modal.prototype.createSkeleton = function () {
        var _this = this;
        if (!this._modalElements)
            return;
        this._modalElements.forEach(function (_a) {
            var type = _a.type, description = _a.description, className = _a.className;
            var element = _this.create(type, description, className);
            _this.modalContainer.appendChild(element);
        });
    };
    Modal.prototype.render = function () {
        this.hide();
        this.createSkeleton();
    };
    return Modal;
}(Crawler));
export default Modal;
