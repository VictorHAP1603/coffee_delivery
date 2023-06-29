import { useEffect, useRef, useState } from "react"
import { CheckoutStepContainer, StepItem } from "./style"



export function CheckoutStep() {
    const [widthSteps, setWidthStepOne] = useState({
        one: 0,
        two: 0
      })
    
      const refStep1 = useRef<HTMLDivElement>(null)
      const refStep2 = useRef<HTMLDivElement>(null)
    
      useEffect(() => {
        const width1 = refStep1.current?.offsetWidth
        const width2 = refStep2.current?.offsetWidth
    
        console.log(width1, width2)
    
        setWidthStepOne({
          one: width1!,
          two: width2!
        })
      }, [])

    return (
        <CheckoutStepContainer 
            className="container"
            widthrefstepone={widthSteps.one / 2 - 40} 
            widthrefsteptwo={widthSteps.two / 2 - 40}
        >
            <StepItem ref={refStep1} className="step__item active">
                <div>
                    <span>1</span>
                </div>
                <p>Informações e Pagemento</p>
            </StepItem>
        
            <StepItem ref={refStep2} className="step__item ">
                <div>
                    <span>2</span>
                </div>
                <p>Confirmação</p>
            </StepItem>
        </CheckoutStepContainer>
    )
}