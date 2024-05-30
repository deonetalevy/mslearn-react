import React from "react";

function StepList(props) {
    // Create the step items using map
    const steps = props.steps.map((step, index) => {
        return (
            // Return the desired HTML for each step
            <li key={index}>
                { step.name }
            </li>
        );
    });

    // return the HTML for the component
    // StepList items will be rendered as li elements
    return (

        <section>
            <h3>{ props.title }</h3>
            <ol>
                { steps }
            </ol>
        </section>
    );
}

export default StepList;