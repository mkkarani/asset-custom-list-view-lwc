import {
    LightningElement,
    track
} from 'lwc';

export default class CustomListView extends LightningElement {


    filterOptions = [{
            value: "All Open Amendments",
            label: "All Open Amendments"
        },
        {
            value: "All Closed Amendments",
            label: "All Closed Amendments"
        },
        {
            value: "D1 Amendments",
            label: "D1 Amendments"
        },
        {
            value: "D2 Amendments",
            label: "D2 Amendments"
        },
        {
            value: "D3 Amendments",
            label: "D3 Amendments"
        },
        {
            value: "D4 Amendments",
            label: "D4 Amendments"
        },
        {
            value: "D5 Amendments",
            label: "D5 Amendments"
        },
        {
            value: "D6 Amendments",
            label: "D6 Amendments"
        }
    ];
    
    currentFilter = 'All open Amendments'
    get dropdownTriggerClass() {
        if (this.isExpanded) {
            return 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click custom_list_view slds-is-open'
        } else {
            return 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click custom_list_view'
        }
    }
    
    
    handleFilterChangeButton(event) {
        let filter = event.target.dataset.filter;
        this.isExpanded = !this.isExpanded;
    }

