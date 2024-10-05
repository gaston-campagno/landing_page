resource "aws_security_group_rule" "ssh_rule" {
  type              = "ingress"
  from_port        = 22
  to_port          = 22
  protocol         = "tcp"
  security_group_id = aws_security_group.seg_group.id
  cidr_blocks      = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "http_rule" {
  type              = "ingress"
  from_port        = 80
  to_port          = 80
  protocol         = "tcp"
  security_group_id = aws_security_group.seg_group.id
  cidr_blocks      = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "k8s_api_rule" {
  type              = "ingress"
  from_port        = 6443
  to_port          = 6443
  protocol         = "tcp"
  security_group_id = aws_security_group.seg_group.id
  cidr_blocks      = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "k8s_node_port_rule" {
  type              = "ingress"
  from_port        = 30000
  to_port          = 30000
  protocol         = "tcp"
  security_group_id = aws_security_group.seg_group.id
  cidr_blocks      = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "egress_rule" {
  type              = "egress"
  from_port        = 0
  to_port          = 0
  protocol         = "-1"
  security_group_id = aws_security_group.seg_group.id
  cidr_blocks      = ["0.0.0.0/0"]
}
