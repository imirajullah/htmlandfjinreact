import React from "react";
import "./style.css";
import profile from "../../img/profile.jpg"; // Adjust the path as needed

function BusinessCard() {
  return (
    <div className="business-card">
      <img src={profile} alt="Profile" width="150" className="profile" />
      <h1>Miraj</h1>
      <h1>Web Developer</h1>
      <p>Contact: 0302-5726323</p>
      <button>Click Me</button>
      <button>Follow Me</button>

     <h2>about me</h2>
     <p>at FlowParserMixin.parseImport (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:14235:17)
    at FlowParserMixin.parseStatementContent (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:12876:27)       
    at FlowParserMixin.parseStatementLike (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:12767:17)
    at FlowParserMixin.parseStatementLike (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:2946:24)
    at FlowParserMixin.parseModuleItem (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:12744:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:13316:36) 
    at FlowParserMixin.parseBlockBody (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:13309:10)
    at FlowParserMixin.parseProgram (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:12625:10)
    at FlowParserMixin.parseTopLevel (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:12615:25)
    at FlowParserMixin.parseTopLevel (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:3715:28)
    at FlowParserMixin.parse (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:14492:10)
     </p>
     <h2>Expirence</h2>
     <p>at FlowParserMixin.parseImport (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:14235:17)
    at FlowParserMixin.parseStatementContent (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:12876:27)       
    at FlowParserMixin.parseStatementLike (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:12767:17)
    at FlowParserMixin.parseStatementLike (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:2946:24)
    at FlowParserMixin.parseModuleItem (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:12744:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:13316:36) 
    at FlowParserMixin.parseBlockBody (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:13309:10)
    at FlowParserMixin.parseProgram (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:12625:10)
    at FlowParserMixin.parseTopLevel (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:12615:25)
    at FlowParserMixin.parseTopLevel (D:\react\reactgen\reactconcept\node_modules\@babel\parser\lib\index.js:3715:28)
     </p>

    </div>
  );
}

export default BusinessCard;

