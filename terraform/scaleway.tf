resource "scaleway_account_ssh_key" "me" {
    name       = "me"
    public_key = "PUT-YOUR-PUBLIC-KEY"
}

resource "scaleway_account_ssh_key" "admin" {
    name       = "admin"
    public_key = "PUT-ADMIN-PUBLIC-KEY"
}

resource "scaleway_instance_ip" "public_ip" {}

resource "scaleway_instance_security_group" "default-security-group" {
  inbound_default_policy  = "drop"
  outbound_default_policy = "accept"

  inbound_rule {
    action = "accept"
    port   = "22"
  }

  inbound_rule {
    action = "accept"
    port   = "80"
  }

  inbound_rule {
    action = "accept"
    port   = "443"
  }
}

resource "scaleway_instance_server" "teaching-instance" {
  type  = "DEV1-S"
  image = "debian_buster"

  tags = [ "teaching" ]

  ip_id = scaleway_instance_ip.public_ip.id

  security_group_id = scaleway_instance_security_group.default-security-group.id
}