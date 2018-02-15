Name: My new free api key
Plan: community
Status: ACTIVE
Key: 7LRyPFW5Ei3JYTJin
Created: Wed Feb 14 2018 13:10:55 GMT-0800 (PST)
Expires in: 365 days

Calls (day): 0
Calls (month): 0
(Updates every 5 minutes)

http://api.airvisual.com/v2/city?city=Moscow&state=Moscow&country=Russia&key=7LRyPFW5Ei3JYTJin
http://api.airvisual.com/v2/city?city=Portland&state=Oregon&country=USA&key=7LRyPFW5Ei3JYTJin

http://api.airvisual.com/v2/city?city=Beijing&state=Beijing&country=China&key=7LRyPFW5Ei3JYTJin

http://api.airvisual.com/v2/cities?state=Moscow&country=Russia&key=7LRyPFW5Ei3JYTJin
export class apiKey {
  constructor() {
    this.key = '7LRyPFW5Ei3JYTJin';
  }
  static getKey() {
  return '7LRyPFW5Ei3JYTJin';
  }
}
