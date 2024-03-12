export class AccountForm {
    static async onload(context: Xrm.Events.EventContext): Promise<void> {
      context.getFormContext().getAttribute("websiteurl").addOnChange(AccountForm.onWebsiteChanged);
    }
    static onWebsiteChanged(context: Xrm.Events.EventContext): void {
      const formContext = context.getFormContext();
      const websiteAttribute = formContext.getAttribute("websiteurl");
      alert(websiteAttribute.getValue());
      // const websiteRegex = /^(https?:\/\/)?([\w\d]+\.)?[\w\d]+\.\w+\/?.+$/g;
      // const match = websiteAttribute.getValue().match(websiteRegex);
      // const isValid = match != null;
  
      // websiteAttribute.controls.forEach((c) => {
      //   if (isValid) {
      //     (c as Xrm.Controls.StringControl).clearNotification("websiteurl");
      //   } else {
      //     (c as Xrm.Controls.StringControl).setNotification("Invalid Website Address-FOO", "websiteurl");
      //   }
      // });
    }
  }
  