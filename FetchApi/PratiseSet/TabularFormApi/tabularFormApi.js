const data="Data can be summarized in a tabular format in various ways for different use cases The most basic form of a table is one that just displays all the rows of a data set This can be done without a Data can be summarized in a tabular format in various ways for different use cases"
async function  display(){
    let b = data.split(',')
    console.log(b)
b.forEach(element => {
         console.log(element[0]);
         console.log(element[1]);
         console.log(element[2]);

    });
}
display();