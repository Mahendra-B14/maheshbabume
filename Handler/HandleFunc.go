package Handler

import (
	"fmt"
	"log"
	"net/http"

	s "servermanagement.com/infraadmin/asset"
)

//-------------------------------------------------Handle function----------------------------------------------------------
func HandleFunc() {
	http.HandleFunc("/login", s.Login)                                //get
	http.HandleFunc("/logout", s.Logout)                              //get
	http.HandleFunc("/add_asset", s.AddAsset)                         //post
	http.HandleFunc("/platformProfile", s.PlatformProfile)            //get
	http.HandleFunc("/dashboard1", s.GetDashboard1)                   //get
	http.HandleFunc("/dashboard2", s.GetDashboard2)                   //get
	http.HandleFunc("/dashboard3", s.GetDashboard3)                   //get
	http.HandleFunc("/dashboard4", s.GetDashboard4)                   //post
	http.HandleFunc("/dashboard5", s.GetDashboard5)                   //get
	http.HandleFunc("/assign_asset", s.Assign_asset)                  //post
	http.HandleFunc("/delete_asset", s.Delete_asset)                  //put
	http.HandleFunc("/ResetPassword", s.ResetPassword)                //put
	http.HandleFunc("/ChangePassword", s.ChangePassword)              //put
	http.HandleFunc("/view_users", s.View_Role)                       //get
	http.HandleFunc("/list_asset", s.ListServer)                      //get
	http.HandleFunc("/list_asset/Reserved", s.Reserved)               //get
	http.HandleFunc("/list_asset/pool", s.Pool)                       //get
	http.HandleFunc("/release_asset", s.Release)                      //post
	http.HandleFunc("/create_user", s.Create_User)                    //post
	http.HandleFunc("/delete_user", s.Delete_User)                    //put
	http.HandleFunc("/update_users", s.Update_User)                   //put
	http.HandleFunc("/update_asset_details", s.UpdateAssetDetails)    //post
	http.HandleFunc("/my_asset", s.GetAsset)                          //get
	http.HandleFunc("/historic_details", s.HistoricDetails)           //get
	http.HandleFunc("/create_request", s.CreateRequest)               //post
	http.HandleFunc("/list_request", s.ListRequest)                   //get
	http.HandleFunc("/update_u_comments", s.UpdateUserComments)       //post
	http.HandleFunc("/update_ia_comments", s.UpdateInfradminComments) //post
	http.HandleFunc("/my_request", s.GetMyRequest)                    //get
	fmt.Printf("Assets are hosted \n Login API : http://localhost:5002/login \n Logout API : http://localhost:5002/logout \n Add_Asset API : http://localhost:5002/add_asset \n ")
	fmt.Printf("Platform Profile API : http://localhost:5002/platformProfile \n Dasboard1 API :  http://localhost:5002/dashboard1 \n Dasboard2 API :  http://localhost:5002/dashboard2 \n")
	fmt.Printf(" Dasboard3 API :  http://localhost:5002/dashboard3 \n Dasboard4 API :  http://localhost:5002/dashboard4 \n Dasboard5 API :  http://localhost:5002/dashboard5 \n ")
	fmt.Printf("assign_asset API :  http://localhost:5002/assign_asset \n delete_asset API :  http://localhost:5002/delete_asset  \n list asset API : http://localhost:5002/list_asset \n")
	fmt.Printf(" reserved asset API : http://localhost:5002/list_asset/Reserved \n reset password API :  http://localhost:5002/ResetPassword \n change password API :  http://localhost:5002/ChangePassword \n")
	fmt.Printf(" view users API :  http://localhost:5002/view_users \n release asset API : http://localhost:5002/release_asset \n Create role API : http://localhost:5002/create_user \n ")
	fmt.Printf("Delete role API : http://localhost:5002/delete_user \n updateAssetDetails API : http://localhost:5002/update_asset_details \n getmyAsset API : http://localhost:5002/my_asset \n")
	fmt.Printf(" historic details API : http://localhost:5002/historic_details \n CreateRequest API : http://localhost:5002/create_request \n list_request API : http://localhost:5002/list_request \n")
	fmt.Printf(" update_u_comments API : http://localhost:5002/update_u_comments \n update_ia_comments API : http://localhost:5002/update_ia_comments \n my_Request :http://localhost:5002/my_Request")

	// router := mux.NewRouter()
	// headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	// methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"})
	// origins := handlers.AllowedOrigins([]string{"*"})
	// log.Fatal(http.ListenAndServe(":5002", handlers.CORS(headers, methods, origins)(router)))
	log.Fatal(http.ListenAndServe(":5002", nil))
}
