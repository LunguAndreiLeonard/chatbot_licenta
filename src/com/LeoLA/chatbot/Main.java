package com.LeoLA.chatbot;

import spark.ModelAndView;
import spark.Spark;
import spark.template.thymeleaf.ThymeleafTemplateEngine;
import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
      Spark.staticFileLocation("/templates");

        Spark.get("/", (request, response) -> {
            HashMap<String, Object> model = new HashMap<>();
            return new ThymeleafTemplateEngine().render(new ModelAndView(model, "index"));
        });


        Spark.get("/chat", (request, response) -> {
           HashMap<String,Object> model = new HashMap<>();
           return new ThymeleafTemplateEngine().render(new ModelAndView(model, "chat"));
        });

        Spark.post("/chat", ((request, response) -> {
            String choice = request.queryParams("choice");
            if("cautare".equals(choice)) {
                return "#marca";
            } else if("info".equals(choice)) {
                return "<div>Avem experienta in acest domeniu de peste 10 ani in care am facut mii de oameni fericiti in alegerea unei masini.</div> " +
                        "<div>Nu raspundem de probleme legate cu vanzatorii, dar va putem ajuta in verificarea si consilierea alegerii.</div> " +
                        "<div> Date de contact    email: andruleo99@gmail.com </div>";
            } else if("vw".equals(choice)) {
                return  "#vw"; //masini de vw
            } else if("golf6gti2009".equals(choice)) {
                return "#golf6gti2009";
            } else if("golf7".equals(choice)) {
                return "#golf7";
            } else if("passatb8".equals(choice)) {
                return "#passatb8";
            } else if("jettagli".equals(choice)) {
                return "#jettagli";
            } else if("arteon".equals(choice)) {
                return "#arteon";
            } else if("golf6gti2013".equals(choice)) {
                return "#golf6gti2013";
            } else if("audi".equals(choice)) {
                return  "#audi"; //masini de audi
            } else if("a4".equals(choice)) {
                return  "#a4";
            } else if("a5".equals(choice)) {
                return  "#a5";
            } else if("a6".equals(choice)) {
                return  "#a6";
            } else if("a7".equals(choice)) {
                return  "#a7";
            } else if("q5".equals(choice)) {
                return  "#q5";
            } else if("bmw".equals(choice)) {
                return  "#bmw"; //massini de bmw
            } else if("bmwseria3".equals(choice)) {
                return  "#bmwseria3";
            } else if("bmwx3".equals(choice)) {
                return  "#bmwx3";
            } else if("bmwx5".equals(choice)) {
                return  "#bmwx5";
            } else if("bmwi3".equals(choice)) {
                return  "#bmwi3";
            } else if("bmwseria5".equals(choice)) {
                return  "#bmwseria5";
            } else if("mercedes".equals(choice)) {
                return "#mercedes"; //masini de mercedes
            } else if("mercedesC".equals(choice)) {
                    return "#mercedesC";
                } else if("mercedesE".equals(choice)) {
                        return "#mercedesE";
                    } else if("mercedesGLE".equals(choice)) {
                            return "#mercedesGLE";
                        } else if("mercedesGLC".equals(choice)) {
                                return "#mercedesGLC";
                            } else if("mercedesCLS".equals(choice)) {
                                    return  "#mercedesCLS";

            } else if("skoda".equals(choice)) {
                return  "#skoda"; //masini de skoda
            } else if("skodaOctavia".equals(choice)) {
                return  "#skodaOctavia";
            } else if("skodaSuperb".equals(choice)) {
                return  "#skodaSuperb";
            } else if("skodaYeti".equals(choice)) {
                return  "#skodaYeti";
            } else if("skodaFabia".equals(choice)) {
                return  "#skodaFabia";
            } else if("seat".equals(choice)) {
                return  "#seat"; //masini de seat
            } else if("leon".equals(choice)) {
                return  "#leon";
            } else if("ibiza".equals(choice)) {
                return  "#ibiza";
            } else if("toledo".equals(choice)) {
                return  "#toledo";
            } else if("ateca".equals(choice)) {
                return  "#ateca";
            } else if("toyota".equals(choice)) {
                return  "#toyota";                   //masini de toyota
            } else if("prius".equals(choice)) {
                return  "#prius";
            } else if("yaris".equals(choice)) {
                return  "#yaris";
            } else if("rav4".equals(choice)) {
                return  "#rav4";
            } else if("corolla".equals(choice)) {
                return  "#corolla";
            } else if("land".equals(choice)) {
                return  "#land";
            } else if("ford".equals(choice)) {
                return "#ford"; //masini de ford
            } else if("focus".equals(choice)) {
                return  "#focus";
            } else if("mondeo".equals(choice)) {
                return  "#mondeo";
            } else if("ranger".equals(choice)) {
                return  "#ranger";
            } else if("fiesta".equals(choice)) {
                return  "#fiesta";
            } else if("porche".equals(choice)) {
                    return  "#porche";
            } else if("macan".equals(choice)) {
                return  "#macan";
            } else if("panamera".equals(choice)) {
                return  "#panamera";
            } else if("cayenne".equals(choice)) {
                return  "#cayenne";//masini de porche
            } else if("oferta".equals(choice)) {
                return "#oferta";  //oferte pentru masini sau alte informatii
            } else if("nelamuriri".equals(choice)) {
                return "#nelamuriri"; //nelamuriri chat text
            }


            return "Este o eroare";

        }));
    }
}
