namespace NotifierSlack {
  export interface ISlackPayload {
    username?: string;
    icon_emoji?: string;
    icon_url?: string;
    channel?: string;
    text: string;
  }

  export const notify = (url: string, payload: ISlackPayload) => {
    const result = post(url, payload);
    Logger.log(`result: ${result.getContentText("UTF-8")}`);
  };

  const post = (
    url: string,
    playload: ISlackPayload
  ): GoogleAppsScript.URL_Fetch.HTTPResponse => {
    const options: any = {
      method: "POST",
      payload: JSON.stringify(playload),
    };
    return UrlFetchApp.fetch(url, options);
  };
}
