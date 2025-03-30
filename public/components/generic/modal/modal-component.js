import { Component } from "../../../component.js";

export class ModalComponent extends Component
{
    styles () {
        return /*css*/`
            .modal-container {
                position: fixed;
                display: block;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.7);
                height: 100vh;
                width: 100vw;
                z-index: 1000;
                opacity: 0;
                animation: fadeIn 0.3s ease-in forwards;
            }

            .modal {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.8);
                background: white;
                padding: 1rem;
                border-radius: 2px;
                border: 1px solid rgba(0, 0, 0, 0.2);
                opacity: 0;
                animation: zoomIn 0.3s ease-in forwards;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            @keyframes zoomIn {
                from { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
                to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
        `
    }

    template () {
        return /*html*/`
            <div class="modal-container">
                <div class="modal">
                    <slot></slot>
                </div>
            </div>
        `
    }

    events () {
        this.click('.modal-container', (e) => {
            if (e.target === e.currentTarget) {
                e.target.remove()
            }
        })
    }
}