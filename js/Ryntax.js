
  const Ryntax = {
    // help : `<pre>\t\nCommand list:\n<span>\n\t[1] contact-us\n\t[2] about-us\n\t[3] email\n\t[4] name\n\t[5] mobile-number\n\t[6] address\n\t[7] chat\n\t[8] exit</span></pre>`,
    get help(){
      // return `<pre>\t\nCommand list:<span>\n\t${Object.keys(Ryntax).toString()}</span></pre>`;
      return help();
    },
    skill : `<pre><span>\t\nSkills:\n\t[1] PHP (&#9733;3)\n\t[2] Javascript (&#9733;4)\n\t[3] JQuery (&#9733;4)\n\t[4] CSS (&#9733;4)\n\t[5] Laravel (&#9733;3)\n\t[6] Bootstrap (&#9733;4)\n\t[7] Python (&#9733;2)\n\t[8] Java (&#9733;2)\n\t[9] MySql (&#9733;3)</span></pre>`,
    info : "<pre>Info:\n\t<span>name:\t\trahul varma</span>\n\t<span>email:\t\trv12345369@gmail.com</span>\n\t<span>phone no.:\t8070200016</span></pre>",
    author : "<pre>Info:\n\t<span>author name:\trahul varma</span>\n\t<span>author email:\trv12345369@gmail.com</span>\n\t<span>phone no.:\t8070200016</span></pre>",
    exit : function($modal, $terminal){
        println($terminal, "exit...");
        closeModal($modal);
        // return {newCommand: true }
      },
    hire : function($modal, $terminal){
        return {newCommand: true }
        println($terminal, "\n\tNot available.\n");
      },
  };

function help() {
  var list = '<pre>\n\t\nCommand list:\n';
  var counter = 1;
  for (prop in Ryntax) {
    list +=  "\n\t<span>["+counter+"]\t"+prop+"</span>";
    counter++;
  }
  list += "\n\t</pre>";
  return  list;
}
