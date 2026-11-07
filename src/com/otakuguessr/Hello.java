package com.otakuguessr;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.otakuguessr.game.Room;
import java.util.Map;;

public class Hello{
    public static void main(String []args){
       ObjectMapper mapper = new ObjectMapper();
       try{   
        System.out.println(mapper.writeValueAsString(Map.of("code", "ABCD", "players", 3)));
       }
       catch(Exception e){}
    }
}