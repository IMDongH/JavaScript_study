import java.io.*;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

public class OpenCsv {
    public static void main(String[] args){
        //반환용 리스트
        List<List<String>> ret = new ArrayList<List<String>>();
        BufferedReader br = null;

        try{
            br = new BufferedReader(new InputStreamReader(new FileInputStream("C:\\Users\\idh10\\Desktop\\자동차정비업체현황.csv")));
            Charset.forName("UTF-8");
            String line = "";

            while((line = br.readLine()) != null){
                //CSV 1행을 저장하는 리스트
                List<String> tmpList = new ArrayList<String>();
                String array[] = line.split(",");
                //배열에서 리스트 반환
                tmpList = Arrays.asList(array);
//                System.out.println(tmpList);
                ret.add(tmpList);
            }
            System.out.println(ret.get(0).size());
            for(int i=0; i<ret.get(0).size(); i++)
            {
                System.out.println(ret.get(0).get(i));
            }
            System.out.println(ret.size());
        }catch(FileNotFoundException e){

            e.printStackTrace();
        }catch(IOException e){

            e.printStackTrace();
        }finally{
            try{
                if(br != null){
                    br.close();
                }
            }catch(IOException e){
                e.printStackTrace();
            }
        }
    }
}