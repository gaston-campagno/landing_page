# terraform.tfvars SOBREESCRIBE el DEFAULT de variables.tf
aws_region = "us-east-2"
vpc_id          = "vpc-0ec8ae419af17fdad"
instance_type   = "t3.medium"
ami_id          = "ami-0862be96e41dcbf74"
instance_name   = "MyEC2Instance_2"
security_group_name = "MyEC2Instance_2"
user_data_script = ["docker.sh", "cerbot.sh"]
ssh_key         = "my-ssh-key_1"

# terraform.tfvars
# security rueles
security_group_ingress_rules = [
  {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # SSH
  },
  {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # HTTP
  }
]

security_group_egress_rules = [
  {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]  # Egreso libre
  }
]
