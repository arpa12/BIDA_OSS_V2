# Cypress Fixtures - File Upload Guide

This folder contains test files used for file upload testing in Cypress.

## How to Use

1. **Place your test files here**: Any file you want to upload during tests should be placed in this folder.

2. **Example files you might need**:
   - `demo.pdf` - Sample PDF document
   - `test-image.jpg` - Sample image file
   - `document.docx` - Sample Word document
   - `spreadsheet.xlsx` - Sample Excel file

3. **In your generated Cypress code**, file uploads will look like this:
   ```javascript
   cy.get('[id="file_input"]').selectFile('cypress/fixtures/demo.pdf', { force: true });
   ```

4. **The `{ force: true }` option** is used because file inputs are often hidden with CSS `display: none`.

## Quick Setup

If you see errors about missing files, simply copy the files you used during recording into this folder with the same filename.

Example:
- You uploaded `C:\Documents\demo.pdf` during recording
- Copy `demo.pdf` to this `cypress/fixtures/` folder
- The test will now find and use it

## Multiple Files

For multiple file uploads:
```javascript
cy.get('[id="file_input"]').selectFile([
  'cypress/fixtures/file1.pdf',
  'cypress/fixtures/file2.jpg'
], { force: true });
```
