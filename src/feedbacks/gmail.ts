namespace GmailFeedback {
  // Utilities
  export const getLabels = (): void => {
    const labels = GmailApp.getUserLabels();
    labels.forEach((label) => {
      Logger.log(`label: ${label.getName()}`);
    });
  };
  // Utilities
  export const unreadCount = (labelName: string): number => {
    const label = GmailApp.getUserLabelByName(labelName);
    return label.getUnreadCount();
  };

  export interface IMailContent {
    name: string;
    address: string;
    body: string;
  }

  export const getThreadInfos = (labelName: string): IMailContent[] => {
    const contents: IMailContent[] = [];
    const label = GmailApp.getUserLabelByName(labelName);
    label.getThreads().forEach((thread) => {
      if (thread.isUnread()) {
        thread.getMessages().forEach((message) => {
          Logger.log(`body: ${message.getBody()}`);
          Logger.log(`plainBody: ${message.getPlainBody()}`);
          Logger.log(`rawContent: ${message.getRawContent()}`);
          const content: IMailContent = {
            address: message.getFrom(),
            body: message.getPlainBody(),
            name: message.getFrom(),
          };
          contents.push(content);
        });
      }
    });
    return contents;
  };
}
