package main

import (
	_ "github.com/lib/pq"
	ia "servermanagement.com/infraadmin/Handler"
)

func main() {
	ia.HandleFunc()

}
