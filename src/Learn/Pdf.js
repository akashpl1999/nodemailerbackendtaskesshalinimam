import React from 'react'
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const Pdf = () => {


    const handlePrint = () => {
        const doc = new jsPDF({
            format: 'a4',
            orientation: 'portrait',
        });

        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        

        doc.text('My Document', 20, 20);

        doc.setFontSize(6);
        doc.text('name', 20, 30);
        doc.text('comapny name', 20, 35);
        doc.text('address', 20, 40);

        doc.setFontSize(6);
        doc.text('name', 0, 185);
        doc.text('comapny name', 0, 190);
        doc.text('address', 0, 195);

    

        // Add subtitle
        doc.setFontSize(16);
        doc.setTextColor(150);
        doc.text('This is a subtitle', 20, 40);

        // Add image
        const imgData = "https://media.istockphoto.com/id/1344252964/photo/dedicated-female-student-of-asian-ethnicity-having-online-class-via-laptop-from-the-modern.jpg?b=1&s=170667a&w=0&k=20&c=gAEsm1Gh0x9C7JgrkDwQ4sDwbRcpyYsq2-XxrFf_HTI="
       
        doc.addImage(imgData, 'JPEG', 20, 60, 150, 50);


        doc.setFontSize(10);
        doc.setTextColor(100);
       

        // doc.text('A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system. Check out this Web developer course online to learn more about react. ', 20, 70);

        // doc.text('A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system. Check out this Web developer course online to learn more about react. ', 29, 90);




        var textBlockWidth = 190;
        var textBlockMargin = 8;

        // Define the text content
        var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus augue vitae justo hendrerit, sit amet tempus mauris semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam fringilla mi a arcu blandit, ut sagittis tellus suscipit.';

        // Split the text into lines
        var lines = doc.splitTextToSize(text, textBlockWidth);

        // Print each line on the page
        for (var i = 0; i < lines.length; i++) {
            doc.text(lines[i], textBlockMargin, 130 + (i * 10));
        }


        const headers = [['Name', 'Age', 'Gender']];
        const data = [
            ['John Doe', '30', 'Male'],
            ['Jane Doe', '25', 'Female'],
            ['Bob Smith', '40', 'Male'],
            ['John Doe', '30', 'Male'],
            ['Jane Doe', '25', 'Female'],
            ['Bob Smith', '40', 'Male'],
        

        ];
        doc.autoTable({
            head: headers,
            body: data,
            startY: 180,
        });

      
      
      
      
        // Add footer
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.text(`Page ${i} of ${pageCount}`, 10, doc.internal.pageSize.height - 20);
        }



        doc.save('example.pdf');
    }


    return (
        <div>


            <button onClick={handlePrint}>Submit</button>


        </div>
    )
}

export default Pdf



// import jsPDF from 'jspdf';

// const generatePDF = () => {
//   const doc = new jsPDF();

//   // Add header
//   doc.setFontSize(22);
//   doc.text('My Document', 20, 20);

//   // Add subtitle
//   doc.setFontSize(16);
//   doc.setTextColor(150);
//   doc.text('This is a subtitle', 20, 30);

//   // Add image
//   const imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/...'; // base64-encoded image data
//   doc.addImage(imgData, 'JPEG', 20, 40, 50, 50);

//   // Add table
//   const headers = [['Name', 'Age', 'Gender']];
//   const data = [
//     ['John Doe', '30', 'Male'],
//     ['Jane Doe', '25', 'Female'],
//     ['Bob Smith', '40', 'Male'],
//   ];
//   doc.autoTable({
//     head: headers,
//     body: data,
//     startY: 110,
//   });

//   // Add footer
//   const pageCount = doc.getNumberOfPages();
//   for (let i = 1; i <= pageCount; i++) {
//     doc.setPage(i);
//     doc.text(`Page ${i} of ${pageCount}`, 20, doc.internal.pageSize.height - 20);
//   }

//   doc.save('example.pdf');
// };
