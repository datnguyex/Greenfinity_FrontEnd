import { finishRecycleApp, qrRecycleApp, recycleMachine, startRecycleApp, startRecycleMachine } from '../Images';

export const StepImg = [
    { img: recycleMachine, step: 1, textKey: 'step1', descriptionKey: 'doStep1' },
    { img: startRecycleApp, step: 2, textKey: 'step2', descriptionKey: 'doStep2' },
    { img: startRecycleMachine, step: 3, textKey: 'step3', descriptionKey: 'doStep3' },
    { img: qrRecycleApp, step: 4, textKey: 'step4', descriptionKey: 'doStep4' },
    { img: finishRecycleApp, step: 5, textKey: 'step5', descriptionKey: 'doStep5' },
];
