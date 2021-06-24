import { trigger, animate, style, group, query, transition } from "@angular/animations";

export const routerTransition = trigger("routerTransition", [
    transition("* <=> *", [
        query(":enter, :leave", style({ position: "fixed", width: "100%", opacity: 1 })
            , { optional: true }),
        group([
            query(":enter", [
                style({ transform: "translateX(100%)" }),
                animate("0.2s ease-in-out", style({ opacity: 1 }))
            ], { optional: true }),
            query(":leave", [
                style({ transform: "translateX(0%)" }),
                animate("0.2s ease-in-out", style({ opacity: 0 }))
            ], { optional: true })
        ])
    ])
])