function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('formexcel'); // Change 'Sheet1' if your sheet name is different
    const data = JSON.parse(e.postData.contents);
  
    sheet.appendRow([data.rno, data.name, data.sub1, data.sub2, data.sub3, data.total, data.average]);
  
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  