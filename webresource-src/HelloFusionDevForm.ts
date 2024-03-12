export class HelloFusionDevForm {
    static readonly nameColumn = "dkdt_name";

    static async onLoad(context: Xrm.Events.EventContext): Promise<void> {
      context.getFormContext().getAttribute(HelloFusionDevForm.nameColumn).addOnChange(HelloFusionDevForm.onNameChanged);
    }

    static onNameChanged(context: Xrm.Events.EventContext): void {
      const formContext = context.getFormContext();
      const nameAttribute = formContext.getAttribute(HelloFusionDevForm.nameColumn);
      alert(nameAttribute.getValue());
    }
  }
  