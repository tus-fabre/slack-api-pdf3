'use strict';

/*
 * [FILE] create_pdf.js
 *
 * [DESCRIPTION]
 *  pdfmakeパッケージを使って、簡単なテキストをPDFファイルに出力するプログラム
 * 
 */

const PdfPrinter = require('pdfmake');
const fs = require("fs");
require('dotenv').config();
const LOCAL_FOLDER = process.env.LOCAL_FOLDER;

// PDFファイルに用いるフォントの設定
const fonts = {
  IPAexGothic: {
      normal: './fonts/ipaexg.ttf',
      bold: './fonts/ipaexg.ttf',
  }
};

// 出力するPDFファイル名
let output_file = LOCAL_FOLDER + "/test.pdf";

const docDefinition = {
  // PDFドキュメントの内容
  content: [
    '一行目です。',
    '二行目です。'
  ],
  // 初期スタイル
  defaultStyle: {
    font: 'IPAexGothic',
    fontSize: 14,
  }
};

// ドキュメントの内容をPDFファイルとして出力する
const printer = new PdfPrinter(fonts);
const pdfDoc = printer.createPdfKitDocument(docDefinition);
const ws = fs.createWriteStream(output_file);
pdfDoc.pipe(ws);
pdfDoc.end();
console.log("[INFO] ", output_file, 'has been saved.');

/*
 * END OF FILE
 */