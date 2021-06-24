package com;


import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;


import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class PdfTest {

    public static void main( String[] args ) throws IOException, DocumentException, URISyntaxException {
        var path = Paths.get( "C:/Users/ujene/Documents/YouAndYourRight_publish/YouAndYourRightBackend/images/PdfGeneratorImage.PNG" );
        var document = new Document(  );
        PdfWriter.getInstance( document, new FileOutputStream( "itexHelloword.pdf" ));

        document.open();

        var fontBlue = FontFactory.getFont( FontFactory.TIMES_ROMAN, 24, BaseColor.BLUE) ;
        var table = new PdfPTable(3);




        addTableHeader(table);
        addRows(table);
        addCustomRows(table);

        var img = Image.getInstance(path.toAbsolutePath().toString());
        img.scaleAbsolute(26, 50);
        var chunk = new Chunk( "Deux pdf",fontBlue );

        document.add(chunk);
        document.add(img);
        document.add(table);
        document.close();

    }

    private static void addTableHeader(PdfPTable table) {
        Stream.of("column header 1", "column header 2", "column header 3")
                .forEach(columnTitle -> {
                    PdfPCell header = new PdfPCell();
                    header.setBackgroundColor(BaseColor.LIGHT_GRAY);
                    header.setBorderWidth(2);
                    header.setPhrase(new Phrase(columnTitle));
                    table.addCell(header);
                });


    }
    private static void addRows(PdfPTable table) {
        table.addCell("row 1, col 1");
        table.addCell("row 1, col 2");
        table.addCell("row 1, col 3");
    }



    private static void addCustomRows(PdfPTable table)
            throws URISyntaxException, BadElementException, IOException {
        Path path = Paths.get("C:/Users/ujene/Documents/YouAndYourRight_publish/YouAndYourRightBackend/images/PdfGeneratorImage.PNG");
        Image img = Image.getInstance(path.toAbsolutePath().toString());
        img.scalePercent(10);

        PdfPCell imageCell = new PdfPCell(img);
        table.addCell(imageCell);

        PdfPCell horizontalAlignCell = new PdfPCell(new Phrase("row 2, col 2"));
        horizontalAlignCell.setHorizontalAlignment(Element.ALIGN_CENTER);
        table.addCell(horizontalAlignCell);

        PdfPCell verticalAlignCell = new PdfPCell(new Phrase("row 2, col 3"));
        verticalAlignCell.setVerticalAlignment(Element.ALIGN_BOTTOM);
        table.addCell(verticalAlignCell);
    }


}
